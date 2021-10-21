import React from 'react'
import '../styles/error404.css'

class Error404 extends React.Component {
    render() {
        return (
            <div className='container-text'>
                <h2 className='error-404'>404</h2>
                <p className='error-message'> Oups! La page que vous demandez n'existe pas.</p>
                <p className='error-return'>Retourner sur la page d’accueil</p>
            </div>

        )
    }
}

export default Error404