<?php

namespace App\Http\Controllers;

use App\Mail\TeamInvitationMail;
use App\Models\Feedback;
use App\Models\Invitation;
use App\Models\Project;
use App\Models\Team;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;

class ManagerController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    //overview logic

    public function feedbacks(Request $request)
    {
        $feedback = $request->user()->managedFeedbacks()
        ->with(['assignedUser', 'assignedTeam'])->latest()->paginate(10);
        return response()->json([
        'success' => true,
        'message' => 'feedbacks list',
        'data' => $feedback]
            
        );
    }

    public function stats(Request $request)
    {
       $user = $request->user();


    $myProjectIds = $user->project()->pluck('id');

    
    $total = Feedback::whereIn('project_id', $myProjectIds)->count();

    
    $done = Feedback::whereIn('project_id', $myProjectIds)
        ->where('status', 'done')
        ->count();

  
    $open = Feedback::whereIn('project_id', $myProjectIds)
        ->where('status', 'open')
        ->count();

   
    $inProgress = Feedback::whereIn('project_id', $myProjectIds)
        ->where('status', 'in_progress')
        ->count();

    $percentage = $total > 0 ? round(($done / $total) * 100, 1) : 0;

    return response()->json([
        'total' => $total,
        'done' => $done,
        'open' => $open,
        'in_progress' => $inProgress,
        'work_percentage' => $percentage,
    ]);
    }

//     public function assignFeedback(Request $request, Feedback $feedback)
// {
    
//     $this->authorize('assign', $feedback);

//     $request->validate([
//         'assigned_to_user_id' => 'nullable|exists:users,id',
//         'assigned_to_team_id' => 'nullable|exists:teams,id',
//     ]);

//     $feedback->update([
//         'assigned_to_user_id' => $request->assigned_to_user_id,
//         'assigned_to_team_id' => $request->assigned_to_team_id,
//         'status' => 'open' // Automatically move to in_progress when assigned
//     ]);

//     return response()->json(['success' => true, 'message' => 'Feedback assigned successfully']);
//     }




    public function getMembers(Project $project)
    {
    $members = User::where('team_id', $project->team->id)
                   ->select('id', 'name')
                   ->get();

    return response()->json($members);
    } 

    public function assign(Request $request, Feedback $feedback)
    {
      $validated = $request->validate([
        'assigned_to_user_id' => 'nullable|exists:users,id',
       ]);

      $feedback->update([
        'assigned_to_user_id' => $request->assigned_to_user_id,
      ]);
      
       return $feedback->load(['assignedUser']);
    }



// teams logic



    public function teams(Request $request){
         try {

        $projectIds = $request->user()->project()->pluck('id');

        $teams = Team::whereIn('project_id', $projectIds)
            ->with(["project", "members"])
            ->withCount('members')
            ->paginate(10);

        return response()->json([
            'success' => true,
            'data' => $teams
        ]);
    } catch (\Exception $e) {
        return response()->json(['success' => false, 'error' => $e->getMessage()], 500);
    }


    }


    public function storeTeam(Request $request)
    {

    $request->validate([
        'name' => 'required|string|max:255',
        'project_id' => 'required|exists:projects,id',
    ]);

    // 1. Find the project
    $project = Project::findOrFail($request->project_id);

    // 2. Authorize using the Policy (Passes the project instance)
    $this->authorize('create', [Team::class, $project]);

    // 3. Create the team
    $team = Team::create([
        'name' => $request->name,
        'project_id' => $project->id,
    ]);

    return response()->json([
        'success' => true,
        'message' => 'Team created successfully',
        'data' => $team
    ], 201);
    }


    public function deleteTeam($id)
    {
        
        $team = Team::find($id);

        
        if (!$team) {
            return response()->json([
                'message' => 'Team not found'
            ], 404);
        }
        $team->delete();

        return response()->json([
            'message' => 'Team deleted successfully'
        ], 200);
    }


    public function invite(Request $request , Team $team) {
    
       $request->validate([
        'name'  => 'required|string|max:255',
        'email' => 'required|email|unique:users,email'
    ]);

    $temporaryPassword = Str::random(10); 

    $user = User::create([
        'name'     => $request->input('name'), 
        'email'    => $request->input('email'),
        'password' => Hash::make($temporaryPassword),
        'role'     => 'project_member',
    ]);

    
    $team->members()->save($user);

    Mail::to($user->email)->send(new TeamInvitationMail(
        $user->name,
        $user->email, 
        $temporaryPassword, 
        $team->name
    ));

    return response()->json(['message' => 'Member added successfully!']);

    }




    //project logic
   public function projects(Request $request)
   {

    $projects = $request->user()->project()->get();

    return response()->json([
        'success' => true,
        'data' => $projects
    ]);
   }

   public function storeProject(Request $request)
   {
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'description' => 'nullable|string',
        
    ]);

    
    $project = $request->user()->project()->create([
        'name' => $request->name,
        'description' => $request->description,
    ]);

    return response()->json(['success' => true, 'data' => $project], 201);
   }









}