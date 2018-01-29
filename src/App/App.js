import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarComponent from './AppBarComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
       <MuiThemeProvider>
       <AppBarComponent />
       </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
