<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function createFeedback(Request $request){

        $validated = $request->validate([
        'title'       => 'required|string|max:255',
        'description' => 'required|string',
        'priority'    => 'required|in:low,medium,high',
        'project_id'  => 'required|exists:projects,id',
        'image'       => 'nullable|image|max:5120', 
        ]);

        $imageUrl = null;

        if ($request->hasFile('image')) {
        
          $uploadedFileUrl = Cloudinary::upload($request->file('image')->getRealPath())->getSecurePath();

        }

        $feedback = Feedback::create([
        'title'       => $validated['title'],
        'description' => $validated['description'],
        'priority'    => $validated['priority'],
        'project_id'  => $validated['project_id'],
        'status'      => 'open',
        'image_url'   => $uploadedFileUrl, 
        'client_id'   => null
    ]);

    return response()->json(['message' => 'Success', 'data' => $feedback], 201);

   }
}
