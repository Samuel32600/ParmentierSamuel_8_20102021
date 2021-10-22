import React from 'react'
import '../styles/home-page.css'

//banniere
import Banner_Home_Page from '../assets/banner_home-page.png'
import Banner from '../components/Banner.js'
let InfoBanner = "Chez vous, partout et ailleurs"

class Home_Page extends React.Component {
    render() {
        return (

            <div>
                <Banner picture={Banner_Home_Page} text={InfoBanner} />

            </div>

        )
    }
}

export default Home_Page