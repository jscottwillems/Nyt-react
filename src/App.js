import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <h1 className="text-center">
            <strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong>
          </h1>
        </div>
        <SearchForm />
        

      </div>
    );
  }
}

export default App;
