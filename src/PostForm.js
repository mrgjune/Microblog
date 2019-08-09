import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import uuid from 'uuid/v1';
import { connect } from 'react-redux';
import { addPost, editPost } from './actionCreators';


class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            body: "",
           isEditing: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
      
    }
    // If there is a post in the props we are editing the form. 
    // Update the form state to have the current post data.
    componentDidMount() {
        if (this.props.post) {
            this.setState({
                title: this.props.post.title,
                description: this.props.post.description,
                body: this.props.post.body,
                isEditing: true

            })

        }
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    };

    handleClick() {
        this.props.history.push("/")
    }

    handleSubmit(evt) {
        evt.preventDefault();

        // When editing: 
        if (this.state.isEditing) {
            this.props.editPost(this.props.id, this.state)
            this.setState({
                isEditing: false
            })
        }
        // When adding, create an id and add post to redux state. 
        else {
            let id = uuid();
            this.props.addPost(id,this.state);
        }
        // Redirect home
        this.props.history.push("/")
    };
    render() {
        // Change button text when adding / editing
        let button;
        if (this.state.isEditing) {
            button = "Edit Post"
        }
        else {
            button = "Add Post"
        }

        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label> Title</Form.Label>
                        <Form.Control
                            id="title"
                            name="title"
                            type="text"
                            placeholder="text"
                            onChange={this.handleChange}
                            value={this.state.title}
                            size="md" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> description</Form.Label>
                        <Form.Control
                            id="description"
                            name="description"
                            type="text"
                            placeholder="text"
                            onChange={this.handleChange}
                            value={this.state.description}
                            size="md" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> body</Form.Label>
                        <Form.Control
                            id="body"
                            name="body"
                            type="textarea"
                            placeholder="body"
                            onChange={this.handleChange}
                            value={this.state.body}
                            size="md" />
                    </Form.Group>
                    <Button type="submit"
                        variant="outline-dark"
                        size="md"
                        style={{ float: "right" }}
                    >{button}</Button>
                </Form >
                <Button onClick={this.handleClick}>Cancel</Button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    addPost,editPost
}

export default connect(null, mapDispatchToProps)(PostForm);