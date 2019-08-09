import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import PostForm from './PostForm';
import CommentList from "./CommentList";
import { connect } from 'react-redux';
import { removePost, getPost } from './actionCreators';
import Button from 'react-bootstrap/Button';
class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    async componentDidMount() {
        await this.props.getPost(this.props.match.params.postId)
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
        
        // let postId = this.props.match.params.postId;
        // //logic for post
        // let { title, description, body } = this.props.postList[postId];
        // let editForm = <PostForm history={this.props.history} post={{ title, description, body }} id={postId} />

        // // When viewing a post these buttons will appear. When editing, they will not render.
        // let buttons = <div>
        //     <Button variant="outline-primary" className="m-2" onClick={this.handleEdit}>Edit Post</Button>
        //     <Button variant="outline-danger" onClick={this.handleRemove}>
        //         Delete Post
        //     </Button>
        // </div>

        return (

            <div>
                 <Card>
                    <Card.Title>{this.props.post.title}</Card.Title>
                    <Card.Subtitle>{this.props.post.description}</Card.Subtitle> 
                    <Card.Body>{this.props.post.body}</Card.Body>
                </Card>

                {/* {this.state.editing ? editForm : buttons}
                <CommentList postId={postId} /> */} 

            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        post: state
    }
}

export default connect(mapStateToProps, { getPost, removePost })(Post);