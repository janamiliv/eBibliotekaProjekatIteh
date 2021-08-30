<?php

namespace EBiblioteka;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'role_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function uloga()
    {
        return $this->belongsTo("EBiblioteka\Role", "role_id", "id");
    }
    public function imaUlogu($uloga)
    {
        return  $this->uloga()->first()->naziv_uloge == $uloga;
    }
    public function kreiranaPozajmljivanja()
    {
        return  $this->hasMany('EBiblioteka\Task', "user_id", 'id');
    }
    public function assignedTasks()
    {
        return  $this->hasMany('EBiblioteka\Assignment', "assigned_to", 'id');
    }
}
