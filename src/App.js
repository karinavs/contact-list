import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from 'semantic-ui-react';

class App extends Component {
  
  
  
  render () {
    return (
      <div> 
        <Header size="huge" color='blue' textAlign='center'>
          Contact list
        </Header>
      </div>
    )
  }
}

export default App;
