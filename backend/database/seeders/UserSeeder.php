<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Admin Manager',
            'email' => 'manager@startsync.com',
            'password' => Hash::make('password'),
            'role' => 'project_manager',
            
        ]);

        User::create([
            'name' => 'John Member',
            'email' => 'member@startsync.com',
            'password' => Hash::make('password'),
            'role' => 'project_member',
            
        ]);

        User::create([
            'name' => 'Jane Client',
            'email' => 'client@startsync.com',
            'password' => Hash::make('password'),
            'role' => 'client',
            
        ]);

        // Create random users
        User::factory()->projectManager()->count(5)->create();
        User::factory()->projectMember()->count(15)->create();
        User::factory()->client()->count(10)->create();
    }
}
