import { render, screen } from '@testing-library/react';
import App from './App';

describe('App tests', () => {
  test('renders header', () => {
    render(<App />);
    expect(screen.getByText('Codebar Christmas!')).toBeInTheDocument();
  });

  test('should show board', () => {
    render(<App />)
    expect(screen.getByTestId('board')).toBeInTheDocument();
  })

  test('should show baublebox', () => {
    render(<App />)
    expect(screen.getByTestId('baubles')).toBeInTheDocument();
  })

  test('should show sproutBox', () => {
    render(<App />)
    expect(screen.getByTestId('SproutBox')).toBeInTheDocument();
  })
})
