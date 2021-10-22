import React from 'react'
import '../styles/home-page.css'

//banniere
import Banner_Home_Page from '../assets/banner_home-page.png'
import Banner from '../components/Banner.js'
let InfoBanner = "Chez vous, partout et ailleurs"

//carte logement
import Cards from '../components/Card.js'

class Home_Page extends React.Component {
    render() {
        return (

            <div>
                <Banner picture={Banner_Home_Page} text={InfoBanner} />
                <Cards/>
            </div>
        )
    }
}

export default Home_Page