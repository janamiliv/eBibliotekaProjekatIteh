<?php

use App\Assignment;
use App\User;
use Illuminate\Database\Seeder;

class AssignmentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $nizIdeva = User::whereHas('uloga', function ($query) {
            return $query->where('naziv_uloge', '=', "izvrsilac");
        })->get("id");
        for ($i = 1; $i < 14; $i++) {
            Assignment::create([
                'task_id' => rand(1, 14),
                'assigned_to' => $nizIdeva[rand(0, $nizIdeva->count() - 1)]->id
            ]);
        }
    }
}
