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

        $projects->each(function ($project) use ($clients) {
            
            $team = $project->team;
            $members = $team ? User::where('team_id', $team->id)->get() : collect();

            
            for ($i = 0; $i < rand(5, 10); $i++) {
                $feedback = Feedback::create([
                    'title' => fake()->sentence(4),
                    'description' => fake()->paragraph(3),
                    'status' => fake()->randomElement(['open', 'in_progress', 'done']),
                    'priority' => fake()->randomElement(['low', 'medium', 'high']),
                    'project_id' => $project->id,
                    'client_id' => $clients->random()->id,
                    'created_at' => fake()->dateTimeBetween('-3 months', 'now'),
                ]);

                
                if (rand(0, 1) && $team) {
                    $feedback->update(['assigned_to_team_id' => $team->id]);
                } elseif ($members->isNotEmpty()) {
                    $feedback->update(['assigned_to_user_id' => $members->random()->id]);
                }
            }
        });
    }
}
