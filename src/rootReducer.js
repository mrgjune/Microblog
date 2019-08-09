import { ADD_POST, EDIT_POST, REMOVE_POST, ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT } from './actionTypes';

// State looks like: 
/* {postList: {
    postId: {
        id1: {
            title: "string",
            description: "string",
            body: "string",
            comments: [
                {commentId1: "string"},
                {commentId2: "string"},
                ...
            ]
        }
        
    }
}}
*/
const INITIAL_STATE = {
    postList: {}
}

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postList: {
                    ...state.postList,
                    [action.id]: {
                        title: action.post.title,
                        description: action.post.description,
                        body: action.post.body,
                        comments: []
                    }
                }
            }
        case EDIT_POST:
            // TODO: FIX THIS ISSUE - DELETES COMMENTS WHEN POST IS EDITED
            return {
                ...state,
                postList: {
                    ...state.postList,
                    [action.id]: {
                        title: action.post.title,
                        description: action.post.description,
                        body: action.post.body,
                        comments: [...state.postList[action.id].comments]
                    }
                }
            }

        case REMOVE_POST:
            let newState = state;
            delete newState.postList[action.id]
            return {
                ...newState
            }
        case ADD_COMMENT:
            return {
                ...state,
                postList: {
                    ...state.postList,
                    [action.postId]: {
                        ...state.postList[action.postId],
                        comments: [...state.postList[action.postId].comments, action.comment]
                    }
                }
            }
        case DELETE_COMMENT:
            // The comments are an array of objects. Find the array,
            // then filter out all comments where passing in the commentId as a key the value is undefined.
            let newSt = state;
            let commentArray = newSt.postList[action.postId].comments
            const remainingComments = commentArray.filter(comment => comment[action.commentId] === undefined);
            return {
                ...newSt,
                postList: {
                    ...state.postList,
                    [action.postId]: {
                        ...state.postList[action.postId],
                        comments: [...remainingComments]
                    }
                }
            }
        default:
            return state;
    }
}
export default reducer;