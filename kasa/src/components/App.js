import React from 'react'
// import logo from './logo.svg'
import './styles/App.css'
import Header from './Header'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        console.log(Header)
        <Header/>
      </div>
    )
  }
}

export default App;
