import React, { Component } from 'react';
import MForm from './MForm';
import Results from './Results';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MForm />
        <br /><br />
        <h3 style={{textAlign:'center', color:'blueviolet' }}>All Devices Information</h3>
        <Results />
      </div>
    );
  }
}

export default App;