import { ADD_POST, DISPLAY_POSTS, DISPLAY_POST, EDIT_POST, REMOVE_POST, ADD_COMMENT, DELETE_COMMENT } from './actionTypes';


const INITIAL_STATE = {
    titles: [],
    postList: []
}
function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case DISPLAY_POSTS:
                return {
                    ...state.titles,
                    titles: [...state.titles, ...action.posts],
                    postList:[...state.postList]
                }
            
        case DISPLAY_POST:
            console.log(action.post,"action")
                return {...state.postList,
                  postList: [...state.postList, action.post],
                  titles:[...state.titles],
            // return {...state,
            //     ...action.post
            }
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
                },
                titles: [...state.titles, {
                    title: action.post.title,
                    description: action.post.description,

                }]
            }
        case EDIT_POST:
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