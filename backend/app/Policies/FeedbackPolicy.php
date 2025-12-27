<?php

namespace App\Policies;

use App\Models\Feedback;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class FeedbackPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Feedback $feedback): bool
    {
        return $user->id === $feedback->project->manager_id || 
           $user->id === $feedback->clientId || 
           $user->id === $feedback->assigned_to_user_id;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->role === 'client';
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Feedback $feedback): bool
    {
        return $user->id === $feedback->project->manager_id || 
           $user->id === $feedback->assigned_to_user_id;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Feedback $feedback): bool
    {
        return $user->id === $feedback->project->manager_id;
    }

    public function assign(User $user, Feedback $feedback)
    {
    
    return $user->id === $feedback->project->manager_id;
    }

   public function updateStatus(User $user, Feedback $feedback)
   {
    // 1. If assigned to a specific user, only they can update it
    if ($feedback->assigned_to_user_id) {
        return $user->id === $feedback->assigned_to_user_id;
    }

    // 2. If assigned to a team, check if the user is a member of that team
    if ($feedback->assigned_to_team_id) {
        return $user->team_id === $feedback->assigned_to_team_id;
    }

    return false;
   }
    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Feedback $feedback): bool
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Feedback $feedback): bool
    {
        //
    }
}
