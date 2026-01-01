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
        for ($i = 0; $i < 3; $i++) {
            Feedback::create([
                'title' => fake()->sentence(4),
                'description' => fake()->paragraph(2),
                'status' => fake()->randomElement(['open', 'in_progress', 'done']),
                'priority' => fake()->randomElement(['low', 'medium', 'high']),
                'image_url'   => fake()->boolean(70) ? fake()->imageUrl(800, 600, 'business') : null,
                'project_id' => $project->id,
                'client_id'   => fake()->boolean(80) && $clients->isNotEmpty() 
                             ? $clients->random()->id 
                             : null, 
                'assigned_to_user_id' => $myUser->id, 
                'created_at' => fake()->dateTimeBetween('-1 month', 'now'),
            ]);
        }
    });
    
    $this->command->info("Successfully assigned " . ($projects->count() * 3) . " feedbacks to User 2.");
    }
}
