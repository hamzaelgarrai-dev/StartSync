<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use App\Models\Team;
use Illuminate\Http\Request;

class ManagerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $feedback = $request->user()->managedFeedbacks()
        ->with(['assignedUser', 'assignedTeam'])
        ->paginate(10);
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

    public function assignFeedback(Request $request, Feedback $feedback)
{
    
    $this->authorize('assign', $feedback);

    $request->validate([
        'assigned_to_user_id' => 'nullable|exists:users,id',
        'assigned_to_team_id' => 'nullable|exists:teams,id',
    ]);

    $feedback->update([
        'assigned_to_user_id' => $request->assigned_to_user_id,
        'assigned_to_team_id' => $request->assigned_to_team_id,
        'status' => 'open' // Automatically move to in_progress when assigned
    ]);

    return response()->json(['success' => true, 'message' => 'Feedback assigned successfully']);
}







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

}