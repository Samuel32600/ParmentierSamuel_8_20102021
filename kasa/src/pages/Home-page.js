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
            <div>
                <Banner picture={Banner_Home_Page} text={InfoBanner} />
                <ul>
                    {listingHousing.map((oneHousing) =>
                        <li key={oneHousing.id} >
                            <Card cover={oneHousing.cover} title={oneHousing.title} />
                        </li>
                    )}

                </ul>

            </div>
        )
    }
}

export default Home_Page
