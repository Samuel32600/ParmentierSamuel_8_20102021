import React from 'react'
import '../styles/card.css'

import { Link } from 'react-router-dom'

class Card extends React.Component {

    render() {
        return (
            
            <Link key={this.props.oneHousing.id} to={{ pathname: `/oneHousing/${this.props.oneHousing.id}` }}>

                <div className='card'>
                    <img src={this.props.oneHousing.cover} className='housing-cover' alt="photo du logement" />
                    <p className='title-housing'>{this.props.oneHousing.title}</p>
                </div>

            </Link>
        )
    }
}

export default Card

