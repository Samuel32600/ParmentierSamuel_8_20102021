import React from 'react'
import '../styles/banner.css'

class Banner extends React.Component {
    render() {
            return (
            <div className={`container-banner ${this.props.cssStyle}`} >
                <img src={this.props.picture} className='picture-banner' alt='image de la bannière'/>
                <p className='text-banner'>{this.props.text}</p>
            </div>
        )
    }
}
export default Banner