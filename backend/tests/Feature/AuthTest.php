<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AuthTest extends TestCase
{
   use RefreshDatabase;
    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }


    public function test_a_user_can_login_and_receive_a_token()
    {
        $user = User::factory()->create([
            'password' => bcrypt($password = 'secret-123'),
        ]);

        $response = $this->postJson('/api/login', [
            'email' => $user->email,
            'password' => $password,
        ]);

        $response->assertStatus(200)
                 ->assertJsonStructure(['access_token']);

        $this->assertDatabaseHas('personal_access_tokens', [
            'tokenable_id' => $user->id,
        ]);
    }


    public function test_a_user_cannot_login_with_wrong_password()
    {
        $user = User::factory()->create();

        $response = $this->postJson('/api/login', [
            'email' => $user->email,
            'password' => 'wrong-password',
        ]);

        $response->assertStatus(401);
        $this->assertDatabaseCount('personal_access_tokens', 0);
    }

   
    public function test_user_can_logout_and_token_is_deleted()
    {
        $user = User::factory()->create();
        
        $token = $user->createToken('test-token')->plainTextToken;
        $response = $this->withHeader('Authorization', 'Bearer ' . $token)
                         ->postJson('/api/logout');

        $response->assertStatus(200);
        $this->assertDatabaseCount('personal_access_tokens', 0);
    }
}
