import { createHeader } from "./ui/partials/Header.js";
import * as data from "./data/data.js";
import * as feedPage from "./ui/feedPage/FeedList.js";
import { createSinglePost } from "./ui/feedPage/SinglePost.js"
import { createUsersList } from "./ui/peoplePage/UsersList.js";
import { createFooter } from "./ui/partials/Footer.js";


const createFeedPage = (event) => {

    data.getPosts()
        .then((posts) => {
            feedPage.createFeedList(posts)
            localStorage.setItem("posts", JSON.stringify(posts))
        })
}

const createUserPage = (event) => {

    data.getUsers()
        .then((users) => {
            createUsersList(users);
        });
}

const initUsersPage = () => {

    const peoplePage = document.querySelectorAll(".people-page");
    peoplePage.forEach((user) => {
        user.addEventListener("click", createUserPage);
    });
}

const feedPageHandler = (event) => {
    createFeedPage();
}

const initFeedPage = (event) => {

    const feedPage = document.querySelectorAll(".feed-page");
    feedPage.forEach((feed) => {
        feed.addEventListener("click", feedPageHandler);
    })
}

const singlePostHandler = (event) => {

    event.preventDefault();
    const postId = event.target.getAttribute("post-id");
    const type = event.target.getAttribute("post-type");
    
    data.getSinglePost(type, postId)
        .then((post) => {
            createSinglePost(post)
        })
}


const initSinglePostPage = (event) => {

    const feedPost = document.querySelectorAll(".post-event");

    feedPost.forEach((singlePost) => {
        singlePost.addEventListener("click", singlePostHandler);
    })
}



export const init = () => {

    createHeader();
    createFeedPage();
    createFooter();
    initUsersPage();
    initFeedPage();
    setTimeout(initSinglePostPage, 1000);
}