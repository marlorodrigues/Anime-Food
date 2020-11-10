import React from 'react';
import Header from './components/Header/index'
import './style.css'
import Routes from './routes'


const App = () => (
  <div className="App">
    <Header />
    <div id="page">
      <Routes />
      
    </div>
  </div>
)

export default App;
