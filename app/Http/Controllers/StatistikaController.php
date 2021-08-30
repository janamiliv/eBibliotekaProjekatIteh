<?php

namespace EBiblioteka\Http\Controllers;

use EBiblioteka\Task;
use Illuminate\Http\Request;

class StatistikaController extends Controller
{
    public function index()
    {
        $pozajmljivanje = Task::all();
        return view('statistika')->withPozajmljivanje($pozajmljivanje);
    }
}
