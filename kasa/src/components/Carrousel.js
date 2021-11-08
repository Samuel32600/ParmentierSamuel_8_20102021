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

        this.state = { pictureIndex: 0 }
    }

    //fonction image suivante
    nextPicture() {
        let activePicture = this.state.pictureIndex
        let arrayLength = this.lengthArray

        //condition tableau une image
        if (arrayLength === 1) {
            return

        } else {
            //condition image active est inferieur au nombre total du tableau
            if (activePicture < arrayLength) {
                activePicture += 1
            }
            //condition image active est egale au nombre total du tableau
            if (activePicture === arrayLength) {
                activePicture = 0;
            }
        }

        this.setState(
            { pictureIndex: activePicture }
        )
    }

    //fonction image precedente
    previousPicture() {
        let activePicture = this.state.pictureIndex
        let arrayLength = this.lengthArray


        if (activePicture < arrayLength) {
            activePicture -= 1
        }

        if (activePicture < 0) {
            activePicture = arrayLength-1
        }

        this.setState(
            { pictureIndex: activePicture }
        )

    }



    render() {
        return (
            <div className='container-carrousel'>
                <img src={this.picture[this.state.pictureIndex]} className='picture-carrousel' alt='image du logement' />
                <img src={Logo_previous} className='logo-previous' alt='feche pour image precedente' onClick={this.previousPicture.bind(this)} />
                <img src={Logo_next} className='logo-next' alt='feche pour image suivante' onClick={this.nextPicture.bind(this)} />
                <p className='text-picture'>{((this.state.pictureIndex) + 1)}/{this.lengthArray}</p>
            </div>
        )
    }
}
export default Carrousel