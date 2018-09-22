import React, { Component } from 'react';
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";


class Home extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron />
      </div>
    );
  }
}

export default Home;
