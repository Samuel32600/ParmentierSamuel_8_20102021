import React from 'react'
import '../styles/dropdown.css'

// import logo
import Logo_down from '../assets/down.png'
import Logo_up from '../assets/up.png'

class Dropdown extends React.Component {

    constructor(props) {
        super(props);
        this.state = { descriptionIsVisible: false };
    }

    showBoxDescription() {
        this.setState({ descriptionIsVisible: !this.state.descriptionIsVisible })
    }

    render() {
        const descriptionIsVisible = this.state.descriptionIsVisible;
        let logo;
        let textDropdown = "";

        if (descriptionIsVisible === true) {
            //condition pour faire le listing des equipement
            if (Array.isArray(this.props.description)) {
                textDropdown =
                    <ul className='box-listing-Equipements'>
                        {this.props.description.map((listing_Equipements) => 
                        <li key={listing_Equipements}>
                            {listing_Equipements}
                        </li>
                        )}
                    </ul>
            //condition pour faire les paragraphes des description
            } else {                
                textDropdown =
                    <p className={`description-dropdown ${this.props.height_DescriptionDropdown}`}>{this.props.description}</p>
            }
            logo = Logo_up
        } else {
            logo = Logo_down
        }

        return (
            <div className='box-dropdown'>
                <div className='box-title'>
                    <p className={`title-dropdown ${this.props.height_TitleDropdown}`}>{this.props.title}</p>
                    <img src={logo} onClick={this.showBoxDescription.bind(this)} className='logo' alt='chevron' />
                </div>
                {textDropdown}
            </div>
        )
    }
}

export default Dropdown