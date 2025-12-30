<?php

namespace App\Models;

use Database\Factories\FeedbackFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;

    protected $fillable = ["name","project_id"];

    public function members(){
        return $this->hasMany(User::class, 'team_id');
    }

    public function project(){
        return $this->belongsTo(Project::class);
    }

    public function assignedFeedback(){
        return $this->hasMany(Feedback::class, 'assigned_to_team_id');
    }

    public function manager(){
        return $this->project->manager;
    }
}
