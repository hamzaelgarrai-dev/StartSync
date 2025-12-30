<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use Illuminate\Http\Request;

class MemberController extends Controller
{

    public function loadAssignedFeedback(Request $request)
   {

    
      $feedbacks = $request->user()
        ->assignedFeedback() 
        ->with(['project', 'assignedUser']) 
        ->latest()
        ->get();

    return response()->json($feedbacks);
   }


    public function updateStatus(Request $request, Feedback $feedback)
    {
    $request->validate([
        'status' => 'required|in:open,in_progress,done',
    ]);

    if ($feedback->assigned_to_user_id !== auth()->id()) {
        return response()->json(['message' => 'Unauthorized'], 403);
    }

    $feedback->update([
        'status' => $request->status
    ]);

    return response()->json([
        'message' => 'Status updated successfully',
        'feedback' => $feedback
    ]);
   }

}
