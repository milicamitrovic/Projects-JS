import { createHeader } from "./ui/partials/Header.js";
import * as data from "./data/data.js";
import * as feedPage from "./ui/feedPage/FeedList.js";
import { createUsersList } from "./ui/peoplePage/UsersList.js";
import { createFooter } from "./ui/partials/Footer.js";

const root = document.querySelector(".root");


const createFeedPage = (event) => {

    data.getPosts()
        .then((posts) => {
            localStorage.setItem("posts", JSON.stringify(posts));
            userHandler(posts);
        })
}

const userHandler = (posts) => {
    posts.forEach((post) => { 
        const userId = post.userId;
        data.getSingleUser(userId)
            .then((user) => {
                feedPage.createFeedList(post, user);    
            });   
        });
}

const createUserPage = (event) => {

    data.getUsers()
        .then((users) => {
            createUsersList(users);
        });
}

const feedPageHandler = (event) => {
    createFeedPage();
}

const initUsersPage = () => {

    const peoplePage = document.querySelectorAll(".people-page");
    peoplePage.forEach((user) => {
        user.addEventListener("click", createUserPage);
    });
}

const initFeedPage = (event) => {

    const feedPage = document.querySelectorAll(".feed-page");
    feedPage.forEach((feed) => {
        feed.addEventListener("click", feedPageHandler);
    })
}



export const init = () => {

    createHeader();
    createFeedPage();
    createFooter();
    initUsersPage();
    initFeedPage();
}