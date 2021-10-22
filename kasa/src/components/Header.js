import React from 'react'
import '../styles/header.css'

//import image
import logo_header from '../assets/logo_header.png'

import { Link } from 'react-router-dom'

class Header extends React.Component {
    
    render() {
        return (
            <div className='container-header'>
                <img src={logo_header} className='logo-header' alt='logo Kasa' />
                <nav>
                    <ul className='nav-header'>
                        <li className='border'>
                            <Link className='nav-text' to="/">Acceuil</Link>
                        </li>
                        <li className='border'>
                            <Link className='nav-text' to="/About">A Propos</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header