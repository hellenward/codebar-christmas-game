import { render } from '@testing-library/react'
import { Baubles } from './Baubles'

describe('scorebox tests', () => {
    test('should render ScoreBox', () => {
        render(<Baubles />)
    })
})