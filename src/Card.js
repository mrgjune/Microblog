import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { deleteComment } from './actionCreators';
import {connect} from 'react-redux';
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.deleteComment(this.props.postId, this.props.commentId);
    }

    render() {
        // When there is a comment in props, this card is showing a comment.
        if (this.props.comment) {
            return (
                <div>
                    <li> {this.props.comment} </li>
                    <button onClick={this.handleClick}>Delete</button>
                </div>
            )
        }
        // When there is no comment in props, this is a title card.
        return (
            <div>
                <li>
                    <Link to={"/" + this.props.id}> <h1> {this.props.title} </h1> </Link>
                    {this.props.description}
                </li>
            </div>
        )
    }

}
const mapDispatchToProps = {
    deleteComment
}
export default connect(null, mapDispatchToProps)(Card);