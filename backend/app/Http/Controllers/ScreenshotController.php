<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreScreenshotRequest;
use App\Http\Requests\UpdateScreenshotRequest;
use App\Models\Screenshot;

class ScreenshotController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreScreenshotRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Screenshot $screenshot)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateScreenshotRequest $request, Screenshot $screenshot)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Screenshot $screenshot)
    {
        //
    }
}
