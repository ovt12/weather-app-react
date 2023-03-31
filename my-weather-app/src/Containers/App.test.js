import { render, screen } from '@testing-library/react';
import App from "../App"
import '@testing-library/jest-dom';

test('renders learn react link', () => {
    render(<App />);
    const wordsElement = screen.getByText(/Weather App/i);
    expect(wordsElement).toBeInTheDocument();
  });