import React from 'react'
import '../styles/housing.css'

//import du Carrousel
import Carrousel from '../components/Carrousel.js'

//import du Tag
import Tag from '../components/Tag.js'

//import de l'Hote
import Host from '../components/Host.js'

//import de l'evaluation
import Rating from '../components/Rating.js'

//import de la page erreur
import Error404 from './Error404.js'

//import du Dropdown
import Dropdown from '../components/Dropdown.js'

//constante logement
const listingHousing = require('../data/Listing-housing.json')


class Housing extends React.Component {

    constructor(props) {
        super(props);
        this.id = this.props.match.params.id
        this.state = { elementOfHousing: null, }
    }

    componentDidMount() {
        this.setState({ elementOfHousing: listingHousing.find(elementOfHousing => elementOfHousing.id === this.id) })
    }

    render() {
        return (
            this.state.elementOfHousing ? (
                <div>
                    <Carrousel photography={this.state.elementOfHousing.pictures} />
                    <section className='identity-housing'>
                        <section className='housing'>
                            <h1 className='title'>{this.state.elementOfHousing.title}</h1>
                            <h2 className='location'>{this.state.elementOfHousing.location}</h2>
                            <Tag tagListing={this.state.elementOfHousing.tags} />
                        </section>
                        <aside className='host-ratting'>
                            <Host host_name={this.state.elementOfHousing.host.name} host_picture={this.state.elementOfHousing.host.picture} />
                            <Rating star={this.state.elementOfHousing.rating} />
                        </aside>
                    </section>
                    <section className='dropdown-housing'>
                        <div className='Description'>
                            <Dropdown height_TitleDropdown="title-dropdown-Housing" title={"Description"} height_DescriptionDropdown="description-dropdown-Housing" description={this.state.elementOfHousing.description} />
                        </div>
                        <div className='Equipements'>
                            <Dropdown height_TitleDropdown="title-dropdown-Housing" title={"Equipements"} height_DescriptionDropdown="description-dropdown-Housing" description={this.state.elementOfHousing.equipments} />
                        </div>
                    </section>
                </div>
            ) :
                <Error404 />
        )
    }
}

export default Housing