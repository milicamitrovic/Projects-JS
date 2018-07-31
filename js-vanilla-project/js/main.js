import { createHeader } from "./ui/partials/Header.js";
import * as data from "./data/data.js";
import * as feedPage from "./ui/feedPage/FeedList.js";
import { createSinglePost, collectCommentInput } from "./ui/feedPage/SinglePost.js";
import { createUsersList, goToUserProfile } from "./ui/peoplePage/UsersList.js";
import { createFooter } from "./ui/partials/Footer.js";
import { createMyProfilePage } from "./ui/profilePage/MyProfile.js";

const createFeedPage = (event) => {

    data.getPosts()
        .then((posts) => {
            localStorage.setItem("posts", JSON.stringify(posts));
            feedPage.createFeedList(posts)
            feedPage.createFilterMenu()
        });
    setTimeout(initFilterMenu, 2000)
}

const initFilterMenu = () => {

    const allPosts = document.querySelectorAll(".filter-posts");
    allPosts.forEach((post) => {
        post.addEventListener("change", filterPostsHandler)
    })
}

export const filterPostsHandler = (event) => {

    const posts = JSON.parse(localStorage.getItem("posts"));
    const root = document.querySelector(".root");
    root.innerHTML = "";

    feedPage.createFilterMenu();

        if (event.target.value === "text") {
            return feedPage.filterTextPost();
        }
        else if (event.target.value === "video") {
            return feedPage.filterVideoPost();
        }
        else if (event.target.value === "image") {
            return feedPage.filterImagePost();
        }

        else if (event.target.value === "all") {
            return feedPage.createFeedList(posts);
        }
}

const initFeedPage = (event) => {

    const feedPage = document.querySelectorAll(".feed-page");
    feedPage.forEach((feed) => {
        feed.addEventListener("click", feedPageHandler);
    });
}

const feedPageHandler = (event) => {
    createFeedPage();
}

const createUserPage = (event) => {

    data.getUsers()
        .then((users) => {
            localStorage.setItem("users", JSON.stringify(users));
            createUsersList(users);
        });

    setTimeout(initSingleUserProfilePage, 1000);
    setTimeout(filterUsersHandler, 1000);
}

const filterUsersHandler = () => {
    const search = document.querySelector(".comment-value");
    search.addEventListener("keyup", filterUsers);
}

const filterUsers = (event) => {

    let searchValue = collectCommentInput();
    console.log(searchValue);
    const myUsers = JSON.parse(localStorage.getItem("users"));

    let filterUsers = myUsers.filter((user) => {
        let userName = user.name.toLowerCase();
        return userName.includes(searchValue);
    });

    if (searchValue === "") {
        return
    }
    createUsersList(filterUsers);
}

const initUsersPage = () => {

    const peoplePage = document.querySelectorAll(".people-page");
    peoplePage.forEach((user) => {
        user.addEventListener("click", createUserPage);
    });
}

const singlePostHandler = (event) => {

    event.preventDefault();

    const postId = event.target.getAttribute("post-id");
    const type = event.target.getAttribute("post-type");

    data.getSinglePost(type, postId)
        .then((post) => {
            localStorage.setItem("post", JSON.stringify(post));
            getCommentsHandler(post);
        });

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
                    });
            });
        });
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
        });
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
    });
}

const goToUserProfileHandler = (event) => {

    event.preventDefault();
    const userId = event.target.getAttribute("user-id");

    data.getSingleUser(userId)
        .then((user) => {
            goToUserProfile(user);
        });
}

const initSingleUserProfilePage = () => {

    const profiles = document.querySelectorAll(".user-name");
    profiles.forEach((profile) => {
        profile.addEventListener("click", goToUserProfileHandler);
    });
}

const profilePageHandler = (event) => {

    data.getProfile()
        .then((profile) => {
            localStorage.setItem("profile", JSON.stringify(profile))
            createMyProfilePage(profile);
        });

    setTimeout(initProfileModal, 1000)
}

const initProfilePage = () => {

    const profilePage = document.querySelectorAll(".profile-page");
    profilePage.forEach((profile) => {
        profile.addEventListener("click", profilePageHandler);
    });
}

const updateProfileHandler = (event) => {

    event.preventDefault();

    const nameInput = document.querySelector("#update-name");
    const name = nameInput.value;
    const aboutInput = document.querySelector("#update-about");
    const about = aboutInput.value;
    const photoInput = document.querySelector("#update-photo-link");
    const photo = photoInput.value;
    const profile = JSON.parse(localStorage.getItem("profile"));

    const checkName = (name) => {
        if (name === "") {
            return profile.name;
        }
        return name;
    }

    const checkPhoto = (photo) => {
        if (photo === "") {
            return profile.avatarUrl;
        }
        return photo
    }

    const checkedName = checkName(name);
    const checkedPhoto = checkPhoto(photo);

    const dataToUpdate = {
        userId: profile.id,
        name: checkedName,
        email: "bla@gmail.com",
        aboutShort: about,
        about: about,
        avatarUrl: checkedPhoto,
        commentsCount: profile.commentsCount
    }

    data.updateProfile(dataToUpdate)
        .then((response) => {
            profilePageHandler();
        })
}

const initProfileModal = () => {

    const update = document.querySelector("#update-profile");
    update.addEventListener("click", updateProfileHandler);
}

export const init = () => {

    createHeader();
    createFeedPage();
    createFooter();
    initUsersPage();
    initFeedPage();
    setTimeout(initSinglePostPage, 1000);
    initProfilePage();
}