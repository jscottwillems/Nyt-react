import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";
import "../Home/Home.css";

class Saved extends Component {
    state= {
        saved: []
    }

    render() {
        return (
            <div className="saved">
            <Jumbotron>
                <Link to={"/"} className="nav-link">
                    <strong>Home</strong>
                </Link>
                <Link to={"/saved"} className="nav-link">
                    <strong>Saved Articles</strong>
                </Link>
            </Jumbotron>
            <div className="saved-display">
            <h2>Saved Articles</h2>
            <hr/>
            <List>


            </List>
            
            </div>

            </div>
        )
    }
}

export default Saved;