<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $izvrsioci = User::whereHas('uloga', function ($query) {
            return $query->where('naziv_uloge', '=', "izvrsilac");
        })->get();
        return response()->json([
            'izvrsioci' => $izvrsioci
        ]);
    }
}
