import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import uuid from 'uuid/v1';


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
        let id = uuid();
        this.props.addComment(id, this.state)
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

export default CommentForm;