import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    render() {
        const activeStyles = {
            fontWeight: "bold",
            color: "black"
        }

        return (
            <div>
                <Jumbotron>
                    <h1>Hello Mara</h1>
                    <p>This is our wonderful blog."</p>
                </Jumbotron>
                <div className="Navigation navbar navbar-expand-md" style={{ borderBottom: "2px solid black", marginBottom: "50px" }}>
                    <NavLink className="navbar-brand" style={{ display: "inline-block" }} to="/">Blogly</NavLink>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mr-4"><NavLink to="/new" activeStyle={activeStyles}>New Post</NavLink></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavBar;
