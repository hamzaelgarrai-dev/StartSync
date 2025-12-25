<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    use HasFactory;

    protected $fillable = ["title","description","status","priority","project_id","client_id", "AssignedToUser_id" , "AssignedToTeam_id"];

    public function screenshot(){

        return $this->hasMany(Screenshot::class);
    }

    public function project(){
        return $this->belongsTo(Project::class);
    }

    public function client(){
        return $this->belongsTo(User::class);
    }

    public function assignedUser(){
        return $this->belongsTo(User::class , 'assigned_to_user_id');
    }

    public function assignedTeam(){
        return $this->belongsTo(Team::class , 'assigned_to_team_id');
    }
}
