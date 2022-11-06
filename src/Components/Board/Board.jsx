import { Row } from '../Row/Row'

import './Board.css'

export const Board = () => {
    return (
        <div data-testid="board" className="boardStyles">
            <Row />
            <Row />
            <Row />
            <Row />
        </div>
    )
}