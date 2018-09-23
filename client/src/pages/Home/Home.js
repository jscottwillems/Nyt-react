import React, { Component } from 'react';
import axios from "axios";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import SaveBtn from "../../components/SaveBtn";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import "./Home.css";


class Home extends Component {
  state = {
    articles: [],
    title: "",
    date: "",
    url: "",
    thumbnail: "",
    searchTerm: "",
    start: "",
    end: "",
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchHandler(this.state.searchTerm, this.state.start, this.state.end);
  }

  searchHandler = (searchTerm, start, end) => {
    const authKey = "d53181553cde442189a3e045b2df74bf";
    const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${authKey}&sort=newest&q=${searchTerm}&begin_date=${start}0101&end_date=${end}0101`;
    console.log(queryURL);
    return axios.get(queryURL);
}

  render() {
    return (
      <div className="home">
        <Jumbotron>
          <Link to={"/"} className="nav-link">
            <strong>Home</strong>
          </Link>
          <Link to={"/saved"} className="nav-link">
            <strong>Saved Articles</strong>
          </Link>
        </Jumbotron>
        <form>
          <Input
            value={this.state.searchTerm}
            onChange={this.handleInputChange}
            name="searchTerm"
            type="text"
            placeholder="Search Term (required)"
          />
          <Input
            value={this.state.start}
            onChange={this.handleInputChange}
            name="start"
            placeholder="Start Date (optional)"
          />
          <Input
            value={this.state.end}
            onChange={this.handleInputChange}
            name="end"
            placeholder="End Date (optional)"
          />
          <FormBtn
            disabled={!this.state.searchTerm}
            onClick={this.handleFormSubmit}
          />
        </form>
        <div className="results-display">
          <h2>Results</h2>
          <hr/>
          <List>
            {this.state.articles.map(article => (
              <ListItem>
                <h3>{article.snippet}</h3>
              </ListItem>
            ))}

          </List>
        </div>
      </div>
    );
  }
}

export default Home;
