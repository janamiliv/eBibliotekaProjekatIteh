<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = ['naziv', 'deadline', 'user_id'];

    public function assignedBy()
    {
        return $this->belongsTo("App\User", "user_id", "id");
    }
    public function assignments()
    {
        return $this->hasMany("App\Assignment", "task_id", "id");
    }
    public function komentari()
    {
        return $this->hasMany("App\Comment", "task_id", "id");
    }
}
