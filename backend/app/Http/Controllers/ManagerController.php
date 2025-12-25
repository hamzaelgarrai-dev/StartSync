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
    public function index()
    {
        $feedback = Feedback::with(['assignedUser', 'assignedTeam'])->paginate(10);
        return response()->json([
        'success' => true,
        'message' => 'feedbacks list',
        'data' => $feedback]
            
        );
    }

    public function stats()
    {
       $total = Feedback::count();
       $done = Feedback::where('status', 'done')->count();

       $percentage = $total > 0
        ? round(($done / $total) * 100, 1)
        : 0;

    return response()->json([
        'total' => $total,
        'done' => $done,
        'open' => Feedback::where('status', 'open')->count(),
        'in_progress' => Feedback::where('status', 'in_progress')->count(),
        'work_percentage' => $percentage,
    ]);
    }

    public function teams(){
         try {
            $team = Team::with("project" , "members")->withCount('members')
    ->paginate(10);

            return response()->json([
                'success' => true,
                'message' => 'teams list',
                'data' => $team
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Server error',
                'error' => $e->getMessage(),
            ], 500);
        }


    }

}