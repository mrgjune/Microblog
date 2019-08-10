import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
//import PostForm from './PostForm';
//import CommentList from "./CommentList";
import { connect } from 'react-redux';
import { removePost, getPost } from './actionCreators';
//import Button from 'react-bootstrap/Button';
class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            postToAdd:{}
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.displayPost = this.displayPost.bind(this);
    }

    async componentDidMount() {
        console.log("the props are:", this.props);
        // if (this.props.postList.length === 0) {
            await this.props.getPost(this.props.match.params.postId)
            this.displayPost();
        // }
    }

    handleEdit() {
        this.setState({ editing: true })
    }

    handleRemove() {
        let postId = this.props.match.params.postId
        this.props.removePost(postId)
        this.props.history.push("/")
    }
    displayPost() {
    console.log(this.props.post.postList,"mara")
        let postList = this.props.post.postList;
        let postId = this.props.match.params.postId;
        let post;
        let  postToAdd;
        postList.map(postObj => {
            post = postObj;

       })
       if (post.id === Number(postId)) {
         postToAdd =post;
       
       }
       this.setState ({
           postToAdd
       })
               
    }
    render() {
        

        return (

            <div>
                 <Card>
                    <Card.Title>{this.state.postToAdd.title}</Card.Title>
                    <Card.Subtitle>{this.state.postToAdd.description}</Card.Subtitle> 
                    <Card.Body>{this.state.postToAdd.body}</Card.Body>
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