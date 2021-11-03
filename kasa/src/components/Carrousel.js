import React from 'react'
import '../styles/carrousel.css'

//import des logos de naviguation
import Logo_next from '../assets/next.png'
import Logo_previous from '../assets/previous.png'



class Carrousel extends React.Component {
    render() {
        return (
            <div className='container-carrousel'>
                <img src={this.props.picture} className='picture-carrousel' alt='image du logement'/>
                <img src={Logo_previous} className='logo-previous' alt='feche pour image precedente' />
                <img src={Logo_next} className='logo-next' alt='feche pour image suivante' />
                <div>
                <p className='text-picture'>{this.props.text}</p>
                </div>
                
            </div>
        )
    }
}
export default Carrousel