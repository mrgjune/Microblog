import { ADD_POST, DISPLAY_POSTS, DISPLAY_POST, EDIT_POST, REMOVE_POST, ADD_COMMENT, DELETE_COMMENT } from './actionTypes';
import axios from "axios"
const URL = "http://localhost:5000/"

// Get all posts thunk
export function getPosts() {
    console.log("made a get for all the posts in the database")
    return async function (dispatch) {
        let res = await axios.get(`${URL}api/posts`);
        dispatch(gotPosts(res.data));
    }
}
// Get all posts
export function gotPosts(posts) {
    return {
        type: DISPLAY_POSTS,
        posts
    };
}

// Get one post thunk
export function getPost(id) {
    return async function (dispatch, getState) {
        let post;
        if (getState().postList.length !== 0) {
        getState().postList.map(postObj => {
             post = postObj;

        })
        if (post.id === id) {
            return;
        }
    }
        else {
            let res = await axios.get(`${URL}api/posts/${id}`);
            dispatch(gotPost(res.data));
        }
    }
}


// Get one post
export function gotPost(post) {
    return {
        type: DISPLAY_POST,
        post
    }
}

// Add a post thun


// Add post
export function addPost(newPost) {
    console.log("made a post to the db for a new post")

    return async function (dispatch) {
        let res = await axios.post(`${URL}api/posts`, newPost)
        dispatch(addedPost(res.data));
    }
}
export function addedPost(post) {
    return {
        type: ADD_POST,
        post
    }
}
export function editPost(id, post) {
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
export function addComment(commentId, postId, comment) {
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



