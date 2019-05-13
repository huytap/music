import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import store from './components/redux/store';
import {Provider} from 'react-redux';

class App extends Component {
  
  render() {
    return (
      <div className="container-fluid">
        <Provider store={store}>
          <List/>
        </Provider>
        
      </div>
    );
  }
}

export default App;
