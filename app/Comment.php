<?php

namespace EBiblioteka;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = ['komentar', 'task_id'];
    public function pozajmljivanje()
    {
        return $this->belongsTo("EBiblioteka\Task", "task_id", "id");
    }
}
