
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

  test('renders Sign Up button and toggles to Sign Up form', () => {
    render(<App />);
    const signUpButton = screen.getByText('Sign Up', { selector: '.submit' });
    fireEvent.click(signUpButton);
    const header = screen.getByText('Sign Up', { selector: '.text' });
    expect(header).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email Id')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });

  test('toggles back to Login form', () => {
    render(<App />);
    const signUpButton = screen.getByText('Sign Up', { selector: '.submit' });
    fireEvent.click(signUpButton);
    const loginButton = screen.getByText('Login', { selector: '.submit' });
    fireEvent.click(loginButton);
    const header = screen.getByText('Login', { selector: '.text' });
    expect(header).toBeInTheDocument();
    expect(screen.queryByPlaceholderText('Name')).not.toBeInTheDocument();
  });

  test('renders forgot password link in Login mode', () => {
    render(<App />);
    expect(screen.getByText(/Lost Password/i)).toBeInTheDocument();
  });

  test('does not render forgot password link in Sign Up mode', () => {
    render(<App />);
    const signUpButton = screen.getByText('Sign Up', { selector: '.submit' });
    fireEvent.click(signUpButton);
    expect(screen.queryByText(/Lost Password/i)).not.toBeInTheDocument();
  });
});
