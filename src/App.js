import React, { Component } from 'react';
import MForm from './MForm';
import Results from './Results';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to SFDA Medical Devices Management</h1>

        <p style={{textAlign: 'center'}}>The leading regional regularity authority for food, drugs and medical devices with proffessional 
          and excellent services that contributes to the protection and advancement of the health in Saudi Arabia</p>

        <br /><br />

        <MForm />

        <br /><br />

        <Results />
      </div>
    );
  }
}

export default App;