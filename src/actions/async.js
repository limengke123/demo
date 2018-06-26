import axios from '../util'

export const actionType = {
    REQUEST_LIST_POSTS: 'REQUEST_LIST_POSTS',
    RECEIVE_LIST_POSTS: 'RECEIVE_LIST_POSTS',
    REQUEST_ARTICLE_POSTS: 'REQUEST_ARTICLE_POSTS',
    RECEIVE_ARTICLE_POSTS: 'RECEIVE_ARTICLE_POSTS',
}

export const requestListPosts = () => ({
    type: actionType.REQUEST_LIST_POSTS
})

export const receiveListPosts = (lists) => ({
    type: actionType.RECEIVE_LIST_POSTS,
    lists
})

export const requestArticlePosts = () => ({
    type: actionType.REQUEST_ARTICLE_POSTS
})

export const receiveArticlePosts = article => ({
    type: actionType.RECEIVE_ARTICLE_POSTS,
    article
})

export const fetchListPost = () => (dispatch) => {
    dispatch(requestListPosts())
    axios.get('/topics')
        .then(resp => {
            dispatch(receiveListPosts(resp.data.data))
        })
}

export const fetchDetailPost = (id) => dispatch => {
    dispatch(requestArticlePosts())
    axios.get(`/topic/${id}`)
        .then(resp => {
            console.log(resp)
            dispatch(receiveArticlePosts(resp.data.data))
        })
}
