import React from 'react'

// import logo from './logo.svg'
import '../styles/App.css'

//import des components
import Header from './Header'
import Footer from './Footer'

//import des pages
import Home_Page from '../pages/Home-page'
import Housing from '../pages/Housing'
import Information from '../pages/Information'
import Error404 from '../pages/Error404'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="App">

        <Router>

          <Header />
          <Error404/>
          <Switch>

            {/* Page acceuil */}
            <Route path/>

            {/* Page des logements */}
            <Route />

            {/* Page A Propos */}
            <Route path />

            {/* Page Erreur 404 */}
            {/* <Route path="/error404" component={Error404} /> */}

          </Switch>

          <Footer />

        </Router>

      </div>
    )
  }
}

export default App;

