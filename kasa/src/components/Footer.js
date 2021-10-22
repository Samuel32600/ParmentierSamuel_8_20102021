import React from 'react'
import '../styles/footer.css'

//import image
import logo_footer from '../assets/logo_footer.png'


class Footer extends React.Component {
    render() {
        return (
            <div className='container-footer'>
                <img src={logo_footer} className='logo-footer' alt='logo Kasa de fin de page'/>
                <p className='text-footer'>© 2020 Kasa. All rights reserved</p>
            </div>
        )
    }
}
export default Footer