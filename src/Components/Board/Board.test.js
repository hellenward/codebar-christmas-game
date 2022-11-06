import { render, screen } from '@testing-library/react';
import { Board } from './Board'

describe('Board tests', () => {
    test('renders Board', () => {
        render(<Board />);
      });

    test('Board should contain 4 rows', () => {
        render(<Board />);
        const rowsOfSquares = screen.getAllByTestId('rowOfSquares')
        expect(rowsOfSquares.length).toBe(4)
    })
})
