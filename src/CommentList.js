import React, { Component } from 'react';
import CommentForm from "./CommentForm";
import Card from "./Card";
import { connect } from 'react-redux';

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: {}
    }
    this.addComment = this.addComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }
  addComment(id, commentInput) {
    this.setState(state => ({
      comments: {
        ...state.comments,
        [id]: {
          commentInput
        }
      }
    }));
  }
  deleteComment(id) {
    this.setState(state => {
      let newState = state;
      delete newState.comments[id]
      return (
        {
          ...newState
        }
      )
    });
  }

  render() {
    let commentArray = this.props.postList[this.props.postId].comments;
    console.log("comment array", commentArray);

    const comments = commentArray.map(comment => {
      let commentObj = comment
      let commentId = Object.keys(commentObj)[0]
      return (
        <Card 
        commentId={commentId}
        comment={commentObj[commentId]}
        postId={this.props.postId}
        />
       
      )
    })
    return (
      <div>
        {comments}
        <CommentForm postId={this.props.postId} addComment={this.addComment} />
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
     postList: {...state.postList}
  }
}

export default connect(mapStateToProps)(CommentList);





