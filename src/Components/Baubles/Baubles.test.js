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
})