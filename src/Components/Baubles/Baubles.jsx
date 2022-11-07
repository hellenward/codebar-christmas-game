import './Baubles.css'
import scoreBauble from '../../images/scoreBauble.png'

export const Baubles = () => {
    return (
        <div data-testid="baubles" className="BaublesStyle"><img className="bauble" src={scoreBauble} /> </div>
    )
}