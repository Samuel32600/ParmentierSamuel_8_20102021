import React from 'react'
import '../styles/dropdown.css'

// import logo
import Logo_down from '../assets/down.png'
import Logo_up from '../assets/up.png'

class Dropdown extends React.Component {

    render() {
        return (
            <div className='box-dropdown'>
                <div className='box-title'>
                    <p className='title-dropdown'>{this.props.title}</p>
                    <img src={Logo_down} className='down' alt='chevron bas' />
                </div>
                <p className='description-dropdown'>{this.props.description}</p>
            </div>
             


        )
    }
}

export default Dropdown