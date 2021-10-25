import React from 'react'
import '../styles/card.css'

class Card extends React.Component {

       
    render() {
        return (
            
            <div className='container-card'>
                <img src={this.props.housing-cover} className='housing-cover' alt="photo de l'appartement" />
                <p className='title-housing'>{this.props.housing.title}</p>                
            </div>
        )
    }
}

export default Card