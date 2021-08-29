<?php

namespace App\Http\Controllers;

use App\Task;
use Illuminate\Http\Request;

class StatistikaController extends Controller
{
    public function index()
    {
        $pozajmljivanje = Task::all();
        return view('statistika')->withPozajmljivanje($pozajmljivanje);
    }
}
