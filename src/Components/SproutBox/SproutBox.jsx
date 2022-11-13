import { Fragment } from 'react'
import './SproutBox.css'
import scoreSprout from '../../images/scoreSprout.jpeg'

export const SproutBox = (props) => {
    return (
        <Fragment>
        <h3>Player 2: {props.player}</h3>
        <div data-testid="SproutBox" className="SproutBoxStyle"><img className="sprout" src={scoreSprout} alt="A sprout"/></div>
        </Fragment>
    )
}