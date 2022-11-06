import { Square } from '../Square/Square'

import './Row.css'

export const Row = () => {
    return (
        <div data-testid="rowOfSquares" className="basicRowStyle">
            <Square />
            <Square />
            <Square />
            <Square />
        </div>
    )
}