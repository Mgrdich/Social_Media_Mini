// Add Post
import {ADD_POST, CLEAR_ERRORS, DELETE_POST, GET_ERRORS, GET_POST, GET_POSTS, LOADING_POST} from "./types";
import axios, {AxiosResponse} from "axios";
import {Action, ActionCreator, AnyAction} from "redux";
import {ThunkAction} from "redux-thunk";

type action = ActionCreator<ThunkAction<void, any, null, AnyAction>>;

export const addPost: action = postData => dispatch => {
    return {
        type: ADD_POST,
        payload: postData.data
    }
};

// Get Posts
export const getPosts: action = () => dispatch => {
    dispatch(setPostLoading());
    axios
        .get('/posts')
        .then((res: AxiosResponse) =>
            dispatch({
                type: GET_POSTS,
                payload: res.data
            })
        ).catch((err: any) => {
            console.log(err);
        }
/*
        dispatch({
            type: GET_POSTS,
            payload: null
        })
*/
    );
};

// Get Post
export const getPost: action = id => dispatch => {
    dispatch(setPostLoading());
    axios
        .get(`/posts/${id}`)
        .then((res: AxiosResponse) =>
            dispatch({
                type: GET_POST,
                payload: res.data
            })
        ).catch((err: any) =>
        dispatch({
            type: GET_POST,
            payload: null
        })
    );
};

// Delete Post
export const deletePost: action = id => dispatch => {
    axios
        .delete(`/posts/${id}`)
        .then((res: AxiosResponse) =>
            dispatch({
                type: DELETE_POST,
                payload: id
            })
        ).catch(err =>
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    );
};

// Add Like
export const addLike: action = id => dispatch => {
    axios
        .post(`/posts/like/${id}`)
        .then((res: AxiosResponse) => dispatch(getPosts())).catch((err: any) =>
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    );
};

// Remove Like
export const removeLike: action = id => dispatch => {
    axios
        .post(`/posts/unlike/${id}`)
        .then((res: AxiosResponse) => dispatch(getPosts())).catch((err: any) =>
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    );
};

// Add Comment
export const addComment: action = (postId, commentData) => dispatch => {
    dispatch(clearErrors());
    axios
        .post(`/posts/comment/${postId}`, commentData)
        .then((res: AxiosResponse) =>
            dispatch({
                type: GET_POST,
                payload: res.data
            })
        ).catch((err: any) =>
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    );
};

// Delete Comment
export const deleteComment: action = (postId, commentId) => dispatch => {
    axios
        .delete(`/posts/comment/${postId}/${commentId}`)
        .then((res: AxiosResponse) =>
            dispatch({
                type: GET_POST,
                payload: res.data
            })
        ).catch((err: any) =>
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    );
};

// Set loading state
export const setPostLoading: ActionCreator<Action> = () => {
    return {
        type: LOADING_POST
    };
};

// Clear errors
export const clearErrors: ActionCreator<Action> = () => {
    return {
        type: CLEAR_ERRORS
    };
};