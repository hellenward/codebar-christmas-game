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
})