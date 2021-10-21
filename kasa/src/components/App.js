import React from 'react'
// import logo from './logo.svg'
import '../styles/App.css'
import Header from './Header'
import Footer from './Footer'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="App">

        <Router>

          <Header />
          <Switch>

            {/* Page acceuil */}
            <Route />

            {/* Page des logements */}
            <Route />

            {/* Page A Propos */}
            <Route />

            {/* Page Erreur 404 */}
            <Route />

          </Switch>

          <Footer />

        </Router>

      </div>
    )
  }
}

export default App;

