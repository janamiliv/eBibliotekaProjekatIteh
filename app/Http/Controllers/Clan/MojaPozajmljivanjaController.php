<?php

namespace EBiblioteka\Http\Controllers\Clan;

use EBiblioteka\Http\Controllers\Controller;
use EBiblioteka\Task;
use Illuminate\Support\Facades\Auth;

class MojaPozajmljivanjaController extends Controller
{
    public function index()
    {
        $mojaPozajmljivanja = Auth::user()->assignedTasks()->with('pozajmljivanje', 'pozajmljivanje.assignedBy')->get();
        return view('clan/mojaPozajmljivanja', [
            'pozajmljivanja' => $mojaPozajmljivanja
        ]);
    }
    public function show($id)
    {
        $pozajmljivanje = Task::first()->where('id', $id)->with('komentari')->get();
        return view('pozajmljivanje', [
            'pozajmljivanje' => $pozajmljivanje
        ]);
    }

    public function update($id)
    {

        echo $id;
        Task::where('id', $id)->update([
            'finished' => true
        ]);
    }
}
