<?php

namespace EBiblioteka;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = ['naziv', 'deadline', 'user_id'];

    public function assignedBy()
    {
        return $this->belongsTo("EBiblioteka\User", "user_id", "id");
    }
    public function assignments()
    {
        return $this->hasMany("EBiblioteka\Assignment", "task_id", "id");
    }
    public function komentari()
    {
        return $this->hasMany("EBiblioteka\Comment", "task_id", "id");
    }
}
