<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Invitation extends Model
{
    use HasFactory;

    protected $fillable = [
        'team_id',
        'email',
        'token',
    ];

    public function team()
    {
        return $this->belongsTo(Team::class);
    }

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($invitation) {
            $invitation->token = Str::random(32);
        });
    }
}
