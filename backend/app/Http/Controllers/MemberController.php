<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use Illuminate\Http\Request;

class MemberController extends Controller
{
    public function updateStatus(Request $request, Feedback $feedback)
{
    
    $this->authorize('updateStatus', $feedback);

    $request->validate([
        'status' => 'required|in:in_progress,done'
    ]);

    $feedback->update(['status' => $request->status]);

    return response()->json(['success' => true, 'message' => 'Status updated!']);
}
}
