
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App and LoginSignup component', () => {
  test('renders Login header by default', () => {
    render(<App />);
    const header = screen.getByText('Login', { selector: '.text' });
    expect(header).toBeInTheDocument();
  });

  test('renders Email and Password input fields by default', () => {
    render(<App />);
    expect(screen.getByPlaceholderText('Email Id')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });

  test('toggles back to Login mode when Already have an account? is clicked', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Need an account?'));
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email Id')).toBeInTheDocument();    
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });


  test('renders forgot password link in Login mode', () => {
    render(<App />);
    expect(screen.getByText(/Lost Password/i)).toBeInTheDocument();
  });

  test('shows error messages for invalid inputs in Sign Up', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Need an account?'));
    fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: '' } });
    fireEvent.change(screen.getByPlaceholderText('Email Id'), { target: { value: 'invalid-email' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: '123' } });
  });

  test('submits form with valid inputs in Sign Up', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Need an account?'));
    fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByPlaceholderText('Email Id'), { target: { value: 'mail@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });

    expect(screen.queryByText(/Username is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Email address is invalid/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Password must be at least 6 characters/i)).not.toBeInTheDocument();
  });
});

