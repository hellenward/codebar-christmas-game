import { render, screen } from '@testing-library/react';
import { Row } from './Row'


describe('Row tests', () => {
    test('renders row', () => {
        render(<Row />);
      });

    test('should have 4 squares per row', () => {
        render(<Row />);
        const gameSquares = screen.getAllByTestId('gameSquare');
        expect(gameSquares.length).toBe(6)
    })
})
