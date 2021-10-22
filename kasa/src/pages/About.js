import React from 'react'
import '../styles/about.css'

//banniere
import Banner_About from '../assets/banner_about.png'
import Banner from '../components/Banner.js'
let InfoBanner = ""

class About extends React.Component {
    render() {
        return (
            <div>
            <Banner picture={Banner_About} text={InfoBanner}/>
            </div>

        )
    }
}

export default About
