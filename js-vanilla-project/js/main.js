import { createHeader } from "./ui/partials/Header.js";
import * as data from "./data/data.js";
import * as feedPage from "./ui/feedPage/FeedList.js";
import { createSinglePost, collectCommentInput } from "./ui/feedPage/SinglePost.js"
import { createUsersList } from "./ui/peoplePage/UsersList.js";
import { createFooter } from "./ui/partials/Footer.js";


const createFeedPage = (event) => {

    data.getPosts()
        .then((posts) => {
            feedPage.createFeedList(posts)
            localStorage.setItem("posts", JSON.stringify(posts));
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
            localStorage.setItem("post", JSON.stringify(post));
            getCommentsHandler(post);
        })
    setTimeout(postNewSingleComment, 2000);
}

const getCommentsHandler = (post) => {

    data.getComments(post.id)
        .then((comments) => {
            localStorage.setItem("comments", JSON.stringify(comments));
            if (comments) {
                createSinglePost(post);
            }
            comments.forEach((comment) => {
                data.getSingleUser(comment.authorId)
                    .then((user) => {  
                        localStorage.setItem("user", JSON.stringify(user));
                        createSinglePost(post);
                    })
        })
    })
}

const postCommentHandler = (event) => {

    event.preventDefault();
    const inputValue = collectCommentInput();
    const singlePost = JSON.parse(localStorage.getItem("post"));
    const userId = singlePost.userId;
    const postId = singlePost.id;

    const post = {
        id: "1",
        dateCreated: Date.now,
        body: inputValue,
        postId: postId,
        authorName: "dads",
        authorId: userId
    }

    data.postNewComment(post)
        .then((response) => {
            newCommentHandler(singlePost)
        })
}

const newCommentHandler = (postId) => {
    getCommentsHandler(postId)
}

const postNewSingleComment = () => {

    const inputValue = document.querySelector(".comment-button");
    inputValue.addEventListener("click", postCommentHandler);
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