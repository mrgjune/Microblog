import React, { Component } from 'react';
import CommentForm from "./CommentForm";
import TitleCard from "./TitleCard";
class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: {}
        }
        this.addComment = this.addComment.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
    }
    addComment(id,commentInput) {
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
         
        
   render(){
    let commentListKeys = Object.keys(this.state.comments);
    let commentList = this.state.comments;
    const comments = commentListKeys.map(key => {
        let comment = commentList[key].commentInput;
        return (
            <TitleCard key={key}
                id={key}
                comment={comment.comment}
                deleteComment={this.deleteComment}
    
               />)
    })
       return(
           <div>
               {comments}
           <CommentForm addComment={this.addComment}/>
           </div>
       )
   }
    }
    

export default CommentList;




 
    