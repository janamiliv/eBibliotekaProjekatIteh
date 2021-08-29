<?php

use App\Role;
use App\User;
use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $poslodavac_id = Role::where('naziv_uloge', 'poslodavac')->first()->id;
        $izvrsilac_id = Role::where('naziv_uloge', 'izvrsilac')->first()->id;

        User::create([
            'name' => 'Srdjan Dincic',
            'email' => 'srdjandincic@gmail.com',
            'password' => bcrypt('srdjandincic'),
            'role_id' => $poslodavac_id
        ]);
        User::create([
            'name' => 'Marko Markovic',
            'email' => 'markomarkovic@gmail.com',
            'password' => bcrypt('markomarkovic'),
            'role_id' => $izvrsilac_id
        ]);
        User::create([
            'name' => 'Milos Djordjevic',
            'email' => 'milosdjordjevic@gmail.com',
            'password' => bcrypt('milosdjordjevic'),
            'role_id' => $izvrsilac_id
        ]);

        echo User::where('name', 'Marko Markovic')->first()->imaUlogu("test");
    }
}
