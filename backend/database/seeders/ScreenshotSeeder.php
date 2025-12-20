<?php

namespace Database\Seeders;

use App\Models\Feedback;
use App\Models\Screenshot;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ScreenshotSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $feedbacks = Feedback::all();

        $feedbacks->each(function ($feedback) {
            // 70% chance to have screenshots
            if (rand(1, 10) <= 7) {
                
                Screenshot::factory()
                    ->count(rand(1, 3))
                    ->create([
                        'feedback_id' => $feedback->id,
                    ]);
            }
        });
    }
}
