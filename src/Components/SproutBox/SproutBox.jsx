import './SproutBox.css'
import scoreSprout from '../../images/scoreSprout.jpeg'

export const SproutBox = () => {
    return (
        <div data-testid="SproutBox" className="SproutBoxStyle"><img className="sprout" src={scoreSprout} alt="A sprout"/></div>
    )
}