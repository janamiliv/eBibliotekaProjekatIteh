<?php

namespace EBiblioteka;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    public function korisnici()
    {
        return $this->hasMany("EBiblioteka\User");
    }
}
