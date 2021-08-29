<?php

use App\Task;
use App\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class TasksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $poslodavac_id = User::where('name', 'Srdjan Dincic')->first()->id;
        for ($i = 1; $i < 15; $i++) {
            Task::create([
                'naziv' => 'Pozajmljivanje ' . $i,
                'deadline' => Carbon::today()->addDays(rand(30, 120)),
                'user_id' => $poslodavac_id,
            ]);
        }
    }
}
