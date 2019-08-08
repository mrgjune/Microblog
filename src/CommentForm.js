import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import uuid from 'uuid/v1';
import { addComment } from './actionCreators';
import { connect } from 'react-redux';


class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });

    };


    handleSubmit(evt) {
        evt.preventDefault();
        let commentId = uuid();
        this.props.addComment(commentId,this.props.postId, {[commentId]: this.state.comment})
        this.setState({
            comment: ""
        })
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit} >
                    <Form.Group>
                        <Form.Label> Add a comment: </Form.Label>
                        <Form.Control
                            id="comment"
                            name="comment"
                            type="text"
                            placeholder="comment"
                            onChange={this.handleChange}
                            value={this.state.comment}
                            size="md" />
                    </Form.Group>
                <Button onClick={this.handleSubmit}>Add a comment</Button>
                </Form >
            </div>
        )
    }
}

const mapDispatchToProps = {
    addComment
}

export default connect(null, mapDispatchToProps)(CommentForm);
