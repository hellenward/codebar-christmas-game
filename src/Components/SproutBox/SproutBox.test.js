import { render, screen } from "@testing-library/react"
import { SproutBox } from './SproutBox'

describe('SproutBox tests', () => {
    test('should render SproutBox', () => {
        render(<SproutBox />)
    })

    test('should render sprout image', () => {
        render(<SproutBox />)
        const sprout = screen.getByRole('img')
        expect(sprout).not.toBe(undefined)
    })

    test('should show player 2 title', () => {
        render(<SproutBox />)
        expect(screen.getByText(/player 2/i)).toBeInTheDocument()
    })

    test('should show a name for player 2', () => {
        const player2 = 'Kylo Ren'
        render(<SproutBox player={player2} />)
        expect(screen.getByText(/kylo ren/i)).toBeInTheDocument()
    })
})