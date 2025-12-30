/** @vitest-environment jsdom */
import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store'; 
import Login from './Login';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

global.localStorage = {
  getItem: vi.fn(() => null),
  setItem: vi.fn(),
};

afterEach(() => {
  cleanup();
});

describe('Login UI Interaction', () => {
  
  it('should render all form elements correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email.../i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Sign In/i })).toBeInTheDocument();
  });

  it('should show validation messages when clicking sign in with empty fields', async () => {
    const user = userEvent.setup();

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    const signInButton = screen.getByRole('button', { name: /Sign In/i });
    await user.click(signInButton);
    
    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/password is required/i)).toBeInTheDocument();
  });
});