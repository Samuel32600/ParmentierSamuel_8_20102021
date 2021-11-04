import React from 'react'
import '../styles/home-page.css'

//import banniere
import Banner_Home_Page from '../assets/banner_home-page.png'
import Banner from '../components/Banner.js'

//import logement
import Card from '../components/Card.js'

//variable banniere
let InfoBanner = "Chez vous, partout et ailleurs"

//constante logement
const listingHousing = require('../data/Listing-housing.json')


class Home_Page extends React.Component {
    render() {
        return (
            <div className='home-page'>
                <Banner picture={Banner_Home_Page} text={InfoBanner} />
                <ul className='container-all-housing'>
                    {listingHousing.map((oneHousing) =>
                        <li className='card-housing' key={oneHousing.id} >
                            <Card oneHousing={oneHousing} />
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Home_Page
