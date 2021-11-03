import React from 'react'
import '../styles/housing.css'

//import du Dropdown

//import du Tag
import Tag from '../components/Tag.js'

//import de l'Hote
import Host from '../components/Host.js'

//import de l'evaluation

//import de la page erreur
import Error404 from './Error404.js'

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
                    <div className='Housing-Title'>
                        <h1 className='title'>{this.state.elementOfHousing.title}</h1>
                        <h2 className='location'>{this.state.elementOfHousing.location}</h2>
                        <Tag tagListing={this.state.elementOfHousing.tags} />
                    </div>

                    <div>
                        <Host host_name={this.state.elementOfHousing.host.name} host_picture={this.state.elementOfHousing.host.picture} />
                        

                    </div>

                </div>
            ) :
                <Error404 />
        )
    }
}

export default Housing