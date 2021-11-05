import React from 'react'
import '../styles/carrousel.css'

//import des logos de naviguation
import Logo_next from '../assets/next.png'
import Logo_previous from '../assets/previous.png'
import Picture from '../assets/picture_housing.png'



class Carrousel extends React.Component {
    render() {
        return (
            <div className='container-carrousel'>
                <img src={Picture} className='picture-carrousel' alt='image du logement' />
                <img src={Logo_previous} className='logo-previous' alt='feche pour image precedente' />
                <img src={Logo_next} className='logo-next' alt='feche pour image suivante' />
                <p className='text-picture'>1/2</p>
            </div>
        )
    }
}
export default Carrousel