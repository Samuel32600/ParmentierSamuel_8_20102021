import React from 'react'
import '../styles/rating.css'

//import des etoiles
import Full_Star from '../assets/Star_Full.png'
import Empty_Star from '../assets/Star_Empty.png'

class Rating extends React.Component {
    render() {

        const QuantityOfStar = [1, 2, 3, 4, 5]
        return (
            <div className='container-rating'>
                {QuantityOfStar.map((quantity) =>
                    this.props.star >= quantity ?
                        <img key={quantity} src={Full_Star} className='star' alt='etoile validée'>
                        </img> : <img key={quantity} src={Empty_Star} className='star' alt='etoile non validée'></img>
                )}
            </div>
        )
    }
}
export default Rating