import './Baubles.css'
import scoreBauble from '../../images/scoreBauble.png'
import { Fragment } from 'react'

export const Baubles = (props) => {
    return (
        <Fragment>
            <h3>Player 1: {props.player}</h3>
            <div data-testid="baubles" className="BaublesStyle"><img className="bauble" src={scoreBauble} /> </div>
        </Fragment>
    )
}