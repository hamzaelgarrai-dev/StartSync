<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\Team;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TeamSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         $projects = Project::all();

        $projects->each(function ($project) {
            
            $team = Team::create([
                'name' => fake()->randomElement([
                    'Development Team',
                    'Engineering Team',
                    'Product Team',
                    'Core Team',
                ]),
                'project_id' => $project->id,
            ]);

            
            $members = User::where('role', 'project_member')
                ->whereNull('team_id')
                ->inRandomOrder()
                ->limit(rand(3, 6))
                ->get();

            $members->each(function ($member) use ($team) {
                $member->update(['team_id' => $team->id]);
            });
        });
    }
}
