import React from 'react'
import '../styles/error404.css'
import { Link } from 'react-router-dom'

class Error404 extends React.Component {
    render() {
        return (
            <div className='container-text'>
                <h2 className='error-404'>404</h2>
                <p className='error-message'> Oups! La page que vous demandez n'existe pas.</p>
                <p>
                    <Link className='error-return' to="/">Retourner sur la page d’accueil</Link>
                </p>
            </div>

        )
    }
}

export default Error404