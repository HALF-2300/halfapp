import { render, screen } from '@testing-library/react';
import App from './App';

test('renders half app loading text', () => {
  render(<App />);
  const loadingText = screen.getByText(/Half App Loading.../i);
  expect(loadingText).toBeInTheDocument();
});
