<?php

namespace App\Models;

use Database\Factories\FeedbackFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;

    protected $fillable = ["name","project_id"];

    public function member(){
        return $this->hasMany(User::class);
    }

    public function project(){
        return $this->belongsTo(Project::class);
    }

    public function assignedFeedback(){
        return $this->hasMany(FeedbackFactory::class);
    }

    public function manager(){
        return $this->project->manager;
    }
}
