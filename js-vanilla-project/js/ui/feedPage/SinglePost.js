const root = document.querySelector(".root");


const createSingleTextPost = (post, user) => {

    const singlePost = document.createElement("div");
    singlePost.setAttribute("id", "text");
    singlePost.setAttribute("class", "container");

    singlePost.innerHTML = `
        <div class="row">
            <div class="content-box">
                <div class="post-content text" post-id=${post.id} user-id=${post.userId}>
                    ${post.text}
                </div>
            </div>
        </div>
    `;

    root.appendChild(singlePost);

    const comValue = document.createElement("input");
    comValue.setAttribute("type", "text");
    comValue.setAttribute("placeholder", "Add your comment");
    comValue.setAttribute("class", "col-sm-10 comment-value");
    singlePost.appendChild(comValue);

    const button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("value", "SEND");
    button.setAttribute("class", "col-sm-2 comment-button");
    singlePost.appendChild(button);

    const comments = JSON.parse(localStorage.getItem("comments"));

    if (!comments) {
        return
    } else {
        const commentList = document.createElement("ul");
        commentList.setAttribute("class", "comments-list container");
        singlePost.appendChild(commentList);

        const comments = JSON.parse(localStorage.getItem("comments"));
        comments.forEach((comment) => {
            const user = JSON.parse(localStorage.getItem("user"));
            
            const commentLi = document.createElement("li");
            commentLi.setAttribute("class", "single-comment");
            commentLi.innerHTML = `
                <div class="row">
                    <div class="col-sm-3">
                        <img src="${user.avatarUrl}" alt="avatar" class="user-image"/>
                        <p class="comment-name">${user.name}</p>
                    </div>
                    <div class="col-sm-9 comment-content">
                    ${comment.body}
                    </div>
                </div>
            `;
            commentList.appendChild(commentLi);
        });
    }
}

const createSingleVideoPost = (post, user) => {

    const singlePost = document.createElement("div");
    singlePost.setAttribute("id", "video");
    singlePost.setAttribute("class", "container");
    singlePost.innerHTML = `
        <div class="container>
            <div class="row">
                <div user-id=${post.userId} class="content-box" >
                    <iframe width='100%' height='300' src=${post.videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    `;

    root.appendChild(singlePost);

    const comValue = document.createElement("input");
    comValue.setAttribute("type", "text");
    comValue.setAttribute("placeholder", "Add your comment");
    comValue.setAttribute("class", "col-sm-10 comment-value");
    singlePost.appendChild(comValue);

    const button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("value", "SEND");
    button.setAttribute("class", "col-sm-2 comment-button");
    singlePost.appendChild(button);

    const comments = JSON.parse(localStorage.getItem("comments"));

    if (!comments) {
        return
    } else {

        const commentList = document.createElement("ul");
        commentList.setAttribute("class", "comments-list container");
        singlePost.appendChild(commentList);

        comments.forEach((comment) => {
            const user = JSON.parse(localStorage.getItem("user"));
            const commentLi = document.createElement("li");
            commentLi.setAttribute("class", "single-comment");
            commentLi.innerHTML = `
            <div class="row">
                <div class="col-sm-3">
                    <img src="${user.avatarUrl}" alt="avatar" class="user-image" />
                    <p class="comment-name">${user.name}</p>
                </div>
                <div class="col-sm-9 comment-content">
                ${comment.body}
                </div>
            </div>
        `;
            commentList.appendChild(commentLi);
        });
    }
}

const createSingleImagePost = (post, user) => {

    const singlePost = document.createElement("div");
    singlePost.setAttribute("id", "image");
    singlePost.setAttribute("class", "container");
    singlePost.innerHTML = `
        <div class="container>
            <div class="row">
                <div class="content-box" user-id=${post.userId}>
                    <img src="${post.imageUrl}" alt="${post.type}" class="single-img" style=" height:500px" />
                </div>
            </div>
        </div>
    `;

    root.appendChild(singlePost);

    const comValue = document.createElement("input");
    comValue.setAttribute("type", "text");
    comValue.setAttribute("placeholder", "Add your comment");
    comValue.setAttribute("class", "col-sm-10 comment-value");
    singlePost.appendChild(comValue);

    const button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("value", "SEND");
    button.setAttribute("class", "col-sm-2 comment-button");
    singlePost.appendChild(button);

    const comments = JSON.parse(localStorage.getItem("comments"));

    if (!comments) {
        return
    } else {

        const commentList = document.createElement("ul");
        commentList.setAttribute("class", "comments-list container");
        singlePost.appendChild(commentList);

        comments.forEach((comment) => {
            const user = JSON.parse(localStorage.getItem("user"));
            const commentLi = document.createElement("li");
            commentLi.setAttribute("class", "single-comment");
            commentLi.innerHTML = `
            <div class="row">
                <div class="col-sm-3">
                    <img src="${user.avatarUrl}" alt="avatar" class="user-image" />
                    <p class="comment-name">${user.name}</p>
                </div>
                <div class="col-sm-9 comment-content">
                ${comment.body}
                </div>
            </div>
        `;
            commentList.appendChild(commentLi);
        });
        }
    }

    export const createSinglePost = (post) => {

        root.innerHTML = "";

        switch (post.type) {
            case "text":
                return createSingleTextPost(post);
            case "video":
                return createSingleVideoPost(post);
            case "image":
                return createSingleImagePost(post);
            default:
                console.log("no post to show.");
        }
    }

    export const collectCommentInput = () => {

        const inputValue = document.querySelector(".comment-value");
        const input = inputValue.value;
        return input;
    }

    export const clearSearchInput = () => {

        const searchInput = document.querySelector(".comment-value");
        searchInput.value = "";
    }
