import React from 'react'
import '../styles/card.css'

class Card extends React.Component {
       
    render() {
        return (
            
            <div className='container-card'>
                <img src={this.props.cover} className='housing-cover' alt="photo du logement" />
                <p className='title-housing'>{this.props.title}</p>                
            </div>
        )
    }
}

export default Card