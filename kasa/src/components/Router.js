import React from 'react'

import { Switch, Route } from "react-router-dom";

//import des differentes pages
import Home_Page from '../pages/Home-page.js'
import Housing from '../pages/Housing.js'
import About from '../pages/About.js'
import Error404 from '../pages/Error404.js'


class Router extends React.Component {
    render() {

        const Pages = [

            // Page acceuil
            {
                path : "/",
                component : Home_Page,
                exact : true
            },

            // Page des logements
            {
                path : "/Housing",
                component : Housing
            },

            // Page A Propos
            {
                path : "/About",
                component : About
            },

            // Page Erreur 404
            {
                path : "/Erreur404",
                component : Error404
            }
        ]
        return (

            <Switch>

                {Pages.map((page, index) => (
                    <Route key={index} {...page} />
                ))}

            </Switch>
        )
    }
}
export default Router