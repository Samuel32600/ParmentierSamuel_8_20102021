import React from 'react'
import '../styles/housing.css'

//import dropdown
import Dropdown from '../components/Dropdown.js'

//import du Tag
import Tag from '../components/Tag.js'

//import de l'Hote
import Host from '../components/Host.js'
import Host_picture from '../assets/Host.png'

//import de l'evaluation
import Rating from '../components/Rating.js'

//constante logement
const listingHousing = require('../data/Listing-housing.json')


class Housing extends React.Component {

    constructor(props){
        super(props)
        this.id = this.props.match.params.id    
    }

    

    render() {
        return (

            <div>
                <div className='Housing-Title'>
                    <h2 className='title'>Cozy loft on the Canal Saint-Martin</h2>
                    <h3 className='location'>Paris, Île-de-France</h3>
                    <div>
                        <Tag tagListing={this.oneHousing.tags}/>
                    </div>
                    <Host host_name={"Alexandre Dumas"} host_picture={Host_picture}/>
                    <Rating/>
                </div>
                
            </div>

        )
    }
}

export default Housing