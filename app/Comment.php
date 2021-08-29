<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = ['komentar', 'task_id'];
    public function pozajmljivanje()
    {
        return $this->belongsTo("App\Task", "task_id", "id");
    }
}
