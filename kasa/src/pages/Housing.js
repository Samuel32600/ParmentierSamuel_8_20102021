import React from 'react'
import '../styles/housing.css'

//import dropdown
import Dropdown from '../components/Dropdown.js'

//import du Tag
import Tag from '../components/Tag.js'

//import de l'Hote
import Host from '../components/Host.js'
import Host_picture from '../assets/Host.png'

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
                    <h2 className='title'>titre</h2>
                    <h3 className='location'>location</h3>
                    <Tag/>
                    <Host host_name={"Alexandre Dumas"} host_picture={Host_picture}/>
                </div>
                
            </div>

        )
    }
}

export default Housing