import React from 'react'
import logo_header from '../assets/logo_header.png'
import '../styles/header.css'

class Header extends React.Component {
    render() {
        return (
            <div className='container-header'>
                <img src={logo_header} className='logo-header' alt='logo Kasa' />
                <nav>
                    <ul className='nav-header'>
                        <li className='border'>Acceuil</li>
                        <li className='border'>A Propos</li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header