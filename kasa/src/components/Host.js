import React from 'react'
import '../styles/host.css'

class Host extends React.Component {
    render() {
        return (
            <div className='container-host'>                
                <p className='Host-name'>{this.props.host_name}</p>
                <img src={this.props.host_picture} className='host-picture' alt="image de l'hôte ou hôtesse"/> 
            </div>
        )
    }
}
export default Host