import React from 'react'
import '../styles/carrousel.css'

//import des logos de naviguation
import Logo_next from '../assets/next.png'
import Logo_previous from '../assets/previous.png'




class Carrousel extends React.Component {

    constructor(props) {
        super(props);
        this.picture = this.props.photography;        
        this.lengthArray = this.props.photography.length;

        this.state = {arrayIndex :0}
    }

    //fonction image suivante
    nextPicture(){
        let activePicture = this.state.arrayIndex
        let arrayLength = this.lengthArray

        if(activePicture<arrayLength){
            activePicture +=1
        }
        this.setState(
            {arrayIndex: activePicture}
        )
    }

    
   
    render() {
        return (
            <div className='container-carrousel'>
                <img src={this.picture[this.state.arrayIndex]} className='picture-carrousel' alt='image du logement' />
                <img src={Logo_previous} className='logo-previous' alt='feche pour image precedente' />
                <img src={Logo_next} className='logo-next' alt='feche pour image suivante' onClick={this.nextPicture.bind(this)}/>
                <p className='text-picture'>{((this.state.arrayIndex)+1)}/{this.lengthArray}</p>
            </div>
        )
    }
}
export default Carrousel