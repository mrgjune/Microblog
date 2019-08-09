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

    // Comments look like [{uuid: text}, ...]. 
    // Map through them, get id and text, create card from it.
    let commentArray = this.props.postList[this.props.postId].comments;
    const comments = commentArray.map(comment => {
      let commentObj = comment
      let commentId = Object.keys(commentObj)[0]
      return (

        // Create a card with comment Id and comment.
        //  Pass in post id to add/remove from redux.
        <Card 
        commentId={commentId}
        comment={commentObj[commentId]}
        postId={this.props.postId}
        />
       
      )
    })
    return (
      <div>
        {/* Show comments and comment form */}
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





