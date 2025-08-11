import { render, screen } from '@testing-library/react';
import App from './App';


test('renders login/signup component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});

export default App;
