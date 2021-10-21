import React from 'react'
// import logo from './logo.svg'
import '../styles/App.css'
import Header from './Header'
import Footer from './Footer'

import{ BrowserRouter as Router, Route} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="App">

        <Router>
          <Route path="/" exact component={Header} />
          <Route path="/footer" component={Footer} />
        </Router>

      </div>
    )
  }
}

export default App;
