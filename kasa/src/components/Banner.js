import React from 'react'
import '../styles/Banner.css'

class Banner extends React.Component {
    render() {
        return (
            <div className='container-banner'>
                <img src={this.props.picture} className='picture-banner' alt='image de la bannière'/>
                <p className='text-banner'>{this.props.text}</p>
            </div>
        )
    }
}
export default Banner