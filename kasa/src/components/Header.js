import React from 'react'
import logo_header from '../assets/logo_header.png'

class Header extends React.Component {
    render() {
        return
         <div className='containerheader'>
             <img src={logo_header} className='logo_header' alt='logo Kasa'/>
             <nav>
                 <ul>
                     <li>Acceuil</li>
                     <li>A Propos</li>
                 </ul>
             </nav>
        </div>
    }
}

export default Header