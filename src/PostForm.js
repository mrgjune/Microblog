import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import uuid from 'uuid/v1';


class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            body: "",
            isEditing:false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        if (this.props.blog) {
            this.setState({
                title: this.props.blog.title,
                description:this.props.blog.description,
                body:this.props.blog.body,
                isEditing:true

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
            this.setState ({
                isEditing:false
            })
        }
        // When adding: 
        else {
        let id = uuid();
        this.props.addPost(id, this.state);
    }
    this.props.history.push("/")
    };
    render() {
        let button;
        if(this.state.isEditing) {
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

export default PostForm;