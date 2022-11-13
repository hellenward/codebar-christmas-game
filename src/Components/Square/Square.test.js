import { render, screen } from '@testing-library/react';
import { Square } from './Square'

describe('square test', () => {
  test('renders square', () => {
    render(<Square />);
  });

  test('should display sprout image when sprout prop is passed in', () => {
    render(<Square type="sprout" />)
    const image = screen.getByRole('img')
    expect(image).toHaveClass('sproutMan')
  })

  test('should display bauble image when bauble prop is passed in', () => {
    render(<Square type="bauble" />)
    const image = screen.getByRole('img')
    expect(image).toHaveClass('baubleMan')
  })

  test('should display back of card when when no type prop is passed in', () => {
    render(<Square />)
    const image = screen.getByRole('img')
    expect(image).toHaveClass('backOfCard')
  })
})
