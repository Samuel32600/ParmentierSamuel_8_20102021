import React from 'react'
import '../styles/App.css'

// import logo from './logo.svg'

//import des components
import Header from './Header'
import Router from './Router'
import Footer from './Footer'


import { BrowserRouter } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (

      <div className="App">

        <BrowserRouter>

          <Header />
          <Router />
          <Footer />

        </BrowserRouter>

      </div>

    )
  }
}

export default App;

