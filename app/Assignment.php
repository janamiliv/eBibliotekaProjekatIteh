<?php

namespace EBiblioteka;

use Illuminate\Database\Eloquent\Model;

class Assignment extends Model
{
    protected $fillable = ['task_id', 'assigned_to'];
    public function pozajmljivanje()
    {
        return $this->belongsTo("EBiblioteka\Task", "task_id", "id");
    }

    public function assignedTo()
    {
        return $this->belongsTo("EBiblioteka\User", "assigned_to", "id");
    }
}
