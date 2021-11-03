import React from 'react'
import '../styles/housing.css'

//import du Dropdown

//import du Tag


//import de l'Hote
import Host_picture from '../assets/Host.png'

//import de l'evaluation

//import de la page erreur
import Error404 from './Error404.js'

//constante logement
const listingHousing = require('../data/Listing-housing.json')




class Housing extends React.Component {

    constructor(props) {
        super(props);
        this.id = this.props.match.params.id
        this.state = { elementOfHousing: null, }
    }

    componentDidMount() {
        this.setState({ elementOfHousing: listingHousing.find(elementOfHousing => elementOfHousing.id === this.id) })
    }

    render() {
        return (
            this.state.elementOfHousing ? (
                <div>
                    <div className='Housing-Title'>
                        <p className='title'>{this.state.elementOfHousing.title}</p>
                        <p className='location'>{this.state.elementOfHousing.location}</p>
                        <div>

                        </div>
                    </div>

                </div>
            ) :
                <Error404 />
        )
    }
}

export default Housing