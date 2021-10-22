import React from 'react'

// import logo from './logo.svg'
import '../styles/App.css'

//import des components
import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'
import bannerhome from '../assets/banner_home-page.png'

//import des pages
import Home_Page from '../pages/Home-page'
import Housing from '../pages/Housing'
import About from '../pages/About'
import Error404 from '../pages/Error404'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


class App extends React.Component {
  render() {
    return (
      <div className="App">

        <Router>

          <Header />
          <Banner picture={bannerhome} text='Chez vous, partout et ailleurs' />
         
          <Switch>

            {/* Page acceuil */}
            <Route path="/" exact component={Home_Page}/>

            {/* Page des logements */}
            <Route path="/Housing" component={Housing} />

            {/* Page A Propos */}
            <Route path="/About" component={About} />

            {/* Page Erreur 404 */}
            <Route path="/Erreur404" component={Error404} />

          </Switch>

          <Footer />

        </Router>

      </div>
    )
  }
}

export default App;

