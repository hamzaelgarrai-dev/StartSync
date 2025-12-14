<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = ["name","description","manager_id"];

    public function manager(){
        return $this->belongsTo(User::class);
    }

    public function feedback(){
        return $this->hasMany(Feedback::class);
    }

    public function team(){
        return $this->hasOne(Team::class);
    }
}
