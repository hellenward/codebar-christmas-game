import { render, screen } from '@testing-library/react'
import { Baubles } from './Baubles'

describe('baubles tests', () => {
    test('should render bauble container', () => {
        render(<Baubles />)
    })

    test('should render bauble image', () => {
        render(<Baubles />)
        const bauble = screen.getByRole('img')
        expect(bauble).not.toBe(undefined)
    })

    test('should show player 1 title', () => {
        render(<Baubles />)
        expect(screen.getByText(/player 1/i)).toBeInTheDocument()
    })

    test('should show a name for player 1', () => {
        const player1 = 'Yoda'
        render(<Baubles player={player1} />)
        expect(screen.getByText(/yoda/i)).toBeInTheDocument()
    })
})