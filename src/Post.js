import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import PostForm from './PostForm';
import CommentList from "./CommentList";
import { connect } from 'react-redux';
import { removePost } from './actionCreators';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);

    }

    handleEdit() {
        this.setState({ editing: true })
    }

    handleRemove() {
        let postId = this.props.match.params.postId
        this.props.removePost(postId)
        this.props.history.push("/")
    }
    render() {
        let postId = this.props.match.params.postId;
        let { title, description, body } = this.props.postList[postId];
        let editForm = <PostForm history={this.props.history} post={{title, description, body}} id={postId} />

        // When viewing a post these buttons will appear. When editing, they will not render.
        let buttons = <div>
            <button onClick={this.handleRemove}>
                Delete Post
            </button>
             <button onClick ={this.handleEdit}>Edit Post</button>
             </div>

        return (

            <div>
                <Card>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle>{description}</Card.Subtitle>
                    <Card.Body>{body}</Card.Body>
                </Card>

                {this.state.editing ? editForm : buttons}
                <CommentList postId={postId} />

            </div>
        )
    }

}


function mapStateToProps(state) {
    return {
        postList: { ...state.postList }
    }
}

const mapDispatchToProps = {
    removePost
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);