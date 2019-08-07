import React, { Component } from 'react';
import { Link } from "react-router-dom"


class TitleCard extends Component {
    render() {
        return (
            <div>
                <li>
                    <Link to={"/" + this.props.id}>  {this.props.title} </Link>
                    {this.props.description}
                </li>
            </div>
        )
    }

}

export default TitleCard;