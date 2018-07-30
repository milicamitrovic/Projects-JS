import { postService } from "./services/postService.js";
import { userService } from "./services/userService.js";
import { commentService } from "./services/commentService.js";

export const getPosts = () => {
    return postService.fetchPosts();
}

export const getSinglePost = (type, id) => {
    return postService.fetchSinglePost(type, id);
}

export const getComments = (id) => {
    return commentService.fetchComments(id);
}

export const postNewComment = (commentData) => {
    return commentService.postNewComment(commentData);
}

export const getUsers = () => {
    return userService.fetchUsers();
}

export const getSingleUser = (id) => {
    return userService.fetchSingleUser(id)    
}

export const getProfile = () => {
    return userService.fetchProfile();
}

export const createNewPost = (type, postData) => {
    return postService.postNewPost(type, postData);
}

export const updateProfile = (data) => {
    return userService.updateProfile(data);
}
