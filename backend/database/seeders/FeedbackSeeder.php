<?php

namespace Database\Seeders;

use App\Models\Feedback;
use App\Models\Project;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FeedbackSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $projects = Project::all();
    $clients = User::where('role', 'client')->get();
    
    // The specific user you want to populate data for
    $myUser = User::find(2);

    if (!$myUser) {
        $this->command->error("User 2 not found. Seeding aborted.");
        return;
    }

    $projects->each(function ($project) use ($clients, $myUser) {
        // Create 3 feedbacks specifically for User 2 per project
        for ($i = 0; $i < 3; $i++) {
            Feedback::create([
                'title' => fake()->sentence(4),
                'description' => fake()->paragraph(2),
                'status' => fake()->randomElement(['open', 'in_progress', 'done']),
                'priority' => fake()->randomElement(['low', 'medium', 'high']),
                'project_id' => $project->id,
                'client_id' => $clients->random()->id ?? 1, // Fallback to ID 1 if no clients
                'assigned_to_user_id' => $myUser->id, // DIRECT ASSIGNMENT
                'created_at' => fake()->dateTimeBetween('-1 month', 'now'),
            ]);
        }
    });
    
    $this->command->info("Successfully assigned " . ($projects->count() * 3) . " feedbacks to User 2.");
    }
}
