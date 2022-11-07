import './Square.css'
import sproutMan from '../../images/scoreSprout.jpeg'
import baubleMan from '../../images/scoreBauble.png'
import star from '../../images/star.jpeg'

export const Square = ({type = ''}) => {
    const isBauble = type === "bauble"
    const isSprout = type === "sprout"
    console.log(isBauble)
    return (
        <div data-testid="gameSquare" className="gameSquare">
            {isBauble ? <img src={baubleMan} className="baubleMan" alt='bauble' /> : isSprout ? <img src={sproutMan} className="sproutMan" alt='sprout' /> : <img src={star} className="backOfCard" alt='back of the card' />}
        </div>
    )
}