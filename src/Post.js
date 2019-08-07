import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import PostForm from './PostForm';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);

    }

    componentDidMount() {
        console.log("hello")
        // if (this.props.post[this.props.match.params.postId] === undefined) {
        //     this.props.history.push("/")
        // }
    }

    handleEdit() {
        this.setState({ editing: true })
    }

    handleRemove() {
        let postId = this.props.match.params.postId
        this.props.delete(postId)
        this.props.history.push("/")
    }
    render() {
        let postId = this.props.match.params.postId;
        let { title, description, body } = this.props.post[postId];
        let editForm = <PostForm history={this.props.history} id={postId} editPost={this.props.editPost} blog={this.props.post[postId]} />
        let buttons = <div>
            <button onClick={this.handleEdit}>Edit Post</button>
            <button onClick={this.handleRemove}>Delete Post</button>
        </div>
        return (
            <div>
                <Card>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle>{description}</Card.Subtitle>
                    <Card.Body>{body}</Card.Body>
                </Card>

                {this.state.editing ? editForm : buttons}

            </div>
        )
    }
}

export default Post;