import React from 'react'
import '../styles/carrousel.css'

//import des logos de naviguation
import Logo_next from '../assets/next.png'
import Logo_previous from '../assets/previous.png'




class Carrousel extends React.Component {

    constructor(props) {
        super(props);
        this.picture = this.props.photography;        
        this.state = {arrayIndex :0}
        this.lengthArray = this.props.photography.length
    }
   
    render() {
        return (
            <div className='container-carrousel'>
                <img src={this.picture[this.state.arrayIndex]} className='picture-carrousel' alt='image du logement' />
                <img src={Logo_previous} className='logo-previous' alt='feche pour image precedente' />
                <img src={Logo_next} className='logo-next' alt='feche pour image suivante' />
                <p className='text-picture'>{((this.state.arrayIndex)+1)}/{this.lengthArray}</p>
            </div>
        )
    }
}
export default Carrousel