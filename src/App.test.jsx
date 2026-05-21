import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App Component', () => {
  it('renders the app title', () => {
    render(<App />);
    expect(screen.getByText(/React \+ Vite/i)).toBeInTheDocument();
  });

  it('renders count button', () => {
    render(<App />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('increments count on button click', async () => {
    const user = userEvent.setup();
    render(<App />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Count is 0');
    await user.click(button);
    expect(button).toHaveTextContent('Count is 1');
  });
});
