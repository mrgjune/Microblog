import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { deleteComment } from './actionCreators';
import { connect } from 'react-redux';
import CardBootstrap from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
            <div className="container">
                <CardBootstrap bg="light" className="text-center p-2 m-2" style={{ width: '200px' }}>
                    <CardBootstrap.Title as="h4">{this.props.title}</CardBootstrap.Title>
                    <CardBootstrap.Subtitle className="mb-2 text-muted">{this.props.description}</CardBootstrap.Subtitle>
                    <Link to={"/" + this.props.id}> <Button> View post! </Button> </Link>

                </CardBootstrap>
            </div>
        )
    }

}
const mapDispatchToProps = {
    deleteComment
}
export default connect(null, mapDispatchToProps)(Card);