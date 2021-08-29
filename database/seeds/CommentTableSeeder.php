<?php

use App\Comment;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CommentTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 30; $i++) {
            Comment::create([
                'komentar' => Str::random(130),
                'task_id' => rand(1, 14)
            ]);
        }
    }
}
