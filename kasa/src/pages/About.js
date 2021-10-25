import React from 'react'
import '../styles/about.css'

//import banniere
import Banner_About from '../assets/banner_about.png'
import Banner from '../components/Banner.js'

//import dropdown
import Dropdown from '../components/Dropdown.js'

//variable banniere
let InfoBanner = ""

//variable titre dropdown
let dropdownTitle = [
    "Fiabilité",
    "Respect",
    "Service",
    "Responsabilité",
]

//variable description dropdown
let dropdownDescription = [
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
]


class About extends React.Component {
    render() {
        return (
            <div>
                <Banner picture={Banner_About} text={InfoBanner} />
                <Dropdown title={dropdownTitle[0]} description={dropdownDescription[0]} />
                <Dropdown title={dropdownTitle[1]} description={dropdownDescription[1]} />
                <Dropdown title={dropdownTitle[2]} description={dropdownDescription[2]}/>
                <Dropdown title={dropdownTitle[3]} description={dropdownDescription[3]}/>
            </div>
        )
    }
}

export default About
