<?php

use App\Role;
use Illuminate\Database\Seeder;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::query()->delete();
        Role::create(['naziv_uloge' => 'poslodavac']);
        Role::create(['naziv_uloge' => 'izvrsilac']);
    }
}
