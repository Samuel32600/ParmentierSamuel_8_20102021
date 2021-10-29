import React from 'react'
import '../styles/housing.css'

//import dropdown
import Dropdown from '../components/Dropdown.js'

//import Tag
import Tag from '../components/Tag.js'

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
                </div>
                
            </div>

        )
    }
}

export default Housing