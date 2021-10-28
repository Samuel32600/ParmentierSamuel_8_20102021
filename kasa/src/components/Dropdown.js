import React from 'react'
import '../styles/dropdown.css'

// import logo
import Logo_down from '../assets/down.png'
import Logo_up from '../assets/up.png'

class Dropdown extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isVisible: false };
    }

    showBoxDescription() {
        this.setState({ isVisible: !this.state.isVisible })
    }

    render() {
        const isVisible = this.state.isVisible;
        let logo;
        let textDropdown = "";

        if (isVisible === true) {            
            logo = Logo_up
            textDropdown = <p className='description-dropdown'>{this.props.description}</p>
        } else {
            logo = Logo_down
        }

        return (
            <div className='box-dropdown'>
                <div className='box-title'>
                    <p className='title-dropdown'>{this.props.title}</p>
                    <img src={logo} onClick={this.showBoxDescription.bind(this)} className='logo' alt='chevron' />
                </div>
                {textDropdown}
            </div>
        )
    }
}

export default Dropdown