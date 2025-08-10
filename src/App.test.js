import { render, screen } from '@testing-library/react';
import App from './App';


test('renders LoginSignup component', () => {
  render(<App />);
  const signupText = screen.getByText(/SignUp/i);
  expect(signupText).toBeInTheDocument();
});

test('renders input fields', () => {
  render(<App />);
  const userInput = screen.getByPlaceholderText(/Username/i);
  const emailInput = screen.getByPlaceholderText(/Email/i);
  const passwordInput = screen.getByPlaceholderText(/Password/i);
  
  expect(userInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

export default App;
