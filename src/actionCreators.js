import { ADD_POST, EDIT_POST, REMOVE_POST, ADD_COMMENT, DELETE_COMMENT } from './actionTypes';

export function addPost(id, post) {
   return {
       type: ADD_POST,
       id,
       post
   }
}
export function editPost(id,post) {
   return {
       type: EDIT_POST,
       id,
       post
   }
}
export function removePost(id) {
   return {
       type: REMOVE_POST,
       id
   }
}
export function addComment(commentId,postId, comment) {
   return {
       type: ADD_COMMENT,
       commentId,
       postId,
       comment
   }
}

export function deleteComment(postId, commentId) {
   return {
       type: DELETE_COMMENT,
       postId,
       commentId
   }
}



