import { postService } from "./services/postService.js";
import { userService } from "./services/userService.js";

export const getPosts = () => {

    return postService.fetchPosts();
}

export const getUsers = () => {

    return userService.fetchUsers();
}

export const getSinglePost = (type, id) => {
    return postService.fetchSinglePost(type, id)
}