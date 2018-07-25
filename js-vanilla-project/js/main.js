import { createHeader } from "./ui/partials/Header.js";
import * as data from "./data/data.js";
import * as feedPage from "./ui/feedPage/FeedList.js";
import { createUsersList } from "./ui/peoplePage/UsersList.js";
import { createFooter } from "./ui/partials/Footer.js";

const root = document.querySelector(".root");


const createFeedPage = (event) => {

    data.getPosts()
        .then((posts) => {
            localStorage.setItem("posts", JSON.stringify(posts))
            feedPage.createFeedList(posts)
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



export const init = () => {

    createHeader();
    createFeedPage();
    createFooter();
    initUsersPage();
    initFeedPage();
}