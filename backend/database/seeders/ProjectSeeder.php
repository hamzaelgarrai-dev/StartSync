<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $managers = User::where('role', 'project_manager')->get();

       
        $managers->each(function ($manager) {
            Project::factory()->count(rand(2, 3))->create([
                    'manager_id' => $manager->id,
                ]);
        });
    }
}
