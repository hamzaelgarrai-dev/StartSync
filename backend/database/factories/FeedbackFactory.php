<?php

namespace Database\Factories;

use App\Models\Project;
use App\Models\Team;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Feedback>
 */
class FeedbackFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(),
            'description' => fake()->paragraph(),
            'status' => fake()->randomElement(['open', 'in_progress', 'done', 'closed']),
            'priority' => fake()->randomElement(['low', 'medium', 'high', 'urgent']),
            'project_id' => Project::factory(),
            'client_id' => User::factory()->client(),
            'assigned_to_user_id' => null,
            'assigned_to_team_id' => null,
        ];
    }

    public function assignedToUser(): static
    {
        return $this->state(fn (array $attributes) => [
            'assignedToUserId' => User::factory()->projectMember(),
            'assignedToTeamId' => null,
        ]);
    }

    public function assignedToTeam(): static
    {
        return $this->state(fn (array $attributes) => [
            'assignedToUserId' => null,
            'assignedToTeamId' => Team::factory(),
        ]);
    }

     public function open(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'open',
        ]);
    }

    public function done(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'done',
        ]);
    }
}
