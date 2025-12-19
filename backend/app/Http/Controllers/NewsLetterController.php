<?php

namespace App\Http\Controllers;

use App\Events\SubscribtionEvent;
use App\Http\Requests\StoreNewsLetterRequest;
use App\Http\Requests\UpdateNewsLetterRequest;
use App\Models\NewsLetter;

class NewsLetterController extends Controller
{
    
    public function subscribe(StoreNewsLetterRequest $request){

        $subscription = Newsletter::create([
            'email' => $request->email
        ]);

        SubscribtionEvent::dispatch($subscription);

         return response()->json(['message' => 'You have been subscribed successfully']);
    }

    
}
