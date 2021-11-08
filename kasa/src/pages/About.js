import React from 'react'
import '../styles/about.css'

//import banniere
import Banner_About from '../assets/banner_about.png'
import Banner from '../components/Banner.js'

//import dropdown
import Dropdown from '../components/Dropdown.js'

//variable banniere
let InfoBanner = ""

let dropDownContent = [
    {
        title : "Fiabilité",
        description : "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
        title : "Respect",
        description : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
        title : "Service",
        description : "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
        title : "Responsabilité",
        description : "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
]


class About extends React.Component {
    render() {
        return (
            <div>
                <Banner picture={Banner_About} text={InfoBanner} />
                <div className='box-AllDropdown'>
                {dropDownContent.map((oneDropdown) =>
                    <Dropdown title={oneDropdown.title} description={oneDropdown.description}/>
                )}
                </div>
            </div>
        )
    }
}

export default About
