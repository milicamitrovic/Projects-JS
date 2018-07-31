import {filterPostsHandler} from "../../main.js";

const root = document.querySelector(".root");

const postList = document.createElement("ul");
postList.setAttribute("class", "container main-post-list");

const createTextPost = (post) => {

    const postLi = document.createElement("li");
    postLi.setAttribute("class", "feed-post text-post");
    postLi.innerHTML = `
    <div class="container" post-id=${post.id}>    
        <div class="row" user-id=${post.userId}>
            <div class="post-content">
                ${post.text}
            </div>
        </div>
        <div>
            <span class="post-type"> 
                ${post.type} post 
            </span>
           <a href="#" class="post-event" post-id=${post.id} post-type=${post.type} user-id=${post.userId}> 
                ${post.commentsNum} comments 
            </a>
        </div>
    </div>
    `;

    postList.appendChild(postLi);
}

export const filterTextPost = () => {

    const posts = JSON.parse(localStorage.getItem("posts"));
    let filteredPosts = [];

    posts.filter((post) => {
        post.type == event.target.value ? filteredPosts.push(post) : "";
    })
    filteredPosts.forEach((post) => {
        const postLi = document.createElement("li");
        postLi.setAttribute("class", "feed-post text-post");
        postLi.innerHTML = `
            <div class="container" post-id=${post.id}>    
                <div class="row" user-id=${post.userId}>
                    <div class="post-content">
                        ${post.text}
                    </div>
                </div>
                <div>
                    <span class="post-type"> 
                        ${post.type} post 
                    </span>
                   <a href="#" class="post-event" post-id=${post.id} post-type=${post.type} user-id=${post.userId}> 
                        ${post.commentsNum} comments 
                    </a>
                </div>
            </div>
            `;
    
        root.appendChild(postLi);

    })

    const allPosts = document.querySelectorAll(".filter-posts");
    allPosts.forEach((post) => {
        post.addEventListener("change", filterPostsHandler)
    })
}

const createVideoPost = (post) => {

    const postLi = document.createElement("li");
    postLi.setAttribute("class", "feed-post video-post");
    postLi.innerHTML = `
        <div class="container" post-id=${post.id}>
            <div class="row" user-id=${post.userId}>
                <div class="video-content">
                    <iframe width='100%' height='300' src=${post.videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </div>
            </div>
            <div class="col-12">
                <span class="post-type">
                    ${post.type} post 
                </span>
                <a href="#" class="post-event" post-id=${post.id} post-type=${post.type} user-id=${post.userId}> 
                    ${post.commentsNum} comments
                </a>
            </div>
        </div>
     `;
    postList.appendChild(postLi);
}

export const filterVideoPost = () => {
    const posts = JSON.parse(localStorage.getItem("posts"));
    let filteredPosts = [];

    posts.filter((post) => {
        post.type == event.target.value ? filteredPosts.push(post) : "";
    })
    filteredPosts.forEach((post) => {

    const postLi = document.createElement("li");
    postLi.setAttribute("class", "feed-post video-post");
    postLi.innerHTML = `
        <div class="container" post-id=${post.id}>
            <div class="row" user-id=${post.userId}>
                <div class="video-content">
                    <iframe width='100%' height='300' src=${post.videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </div>
            </div>
            <div class="col-12">
                <span class="post-type">
                    ${post.type} post 
                </span>
                <a href="#" class="post-event" post-id=${post.id} post-type=${post.type} user-id=${post.userId}> 
                    ${post.commentsNum} comments
                </a>
            </div>
        </div>
     `;
    root.appendChild(postLi);
    })

    const allPosts = document.querySelectorAll(".filter-posts");
    allPosts.forEach((post) => {
        post.addEventListener("change", filterPostsHandler)
    })
}


const createImagePost = (post) => {

    const postLi = document.createElement("li");
    postLi.setAttribute("class", "feed-post image-post");
    postLi.innerHTML = `
    <div class="container feed-image-post" post-id=${post.id}>
        <div class="post-content" user-id=${post.userId}>
            <img src=${post.imageUrl} alt=${post.type} class="feed-img" />
        </div>
        <div class="post-event">
            <span class="post-type">
                ${post.type} post 
            </span>
            <a href="#" class="post-event" post-id=${post.id} post-type=${post.type} user-id=${post.userId}> 
                ${post.commentsNum} comments 
            </a>
        </div>
    </div>
    `;
    postList.appendChild(postLi);
}

export const filterImagePost = () => {

    const posts = JSON.parse(localStorage.getItem("posts"));
    let filteredPosts = [];

    posts.filter((post) => {
        post.type == event.target.value ? filteredPosts.push(post) : "";
    })
    filteredPosts.forEach((post) => {

    const postLi = document.createElement("li");
    postLi.setAttribute("class", "feed-post image-post");
    postLi.innerHTML = `
    <div class="container feed-image-post" post-id=${post.id}>
        <div class="post-content" user-id=${post.userId}>
            <img src=${post.imageUrl} alt=${post.type} class="feed-img" />
        </div>
        <div class="post-event">
            <span class="post-type">
                ${post.type} post 
            </span>
            <a href="#" class="post-event" post-id=${post.id} post-type=${post.type} user-id=${post.userId}> 
                ${post.commentsNum} comments 
            </a>
        </div>
    </div>
    `;
    root.appendChild(postLi);
    })

    const allPosts = document.querySelectorAll(".filter-posts");
    allPosts.forEach((post) => {
        post.addEventListener("change", filterPostsHandler)
    })
}

const noFeed = () => {

    const noFeed = document.createElement("div");
    noFeed.setAttribute("class", "no-feed");
    noFeed.textContent = "No posts to show.";
    root.appendChild(noFeed);
}

const loadingContent = () => {

    const noFeed = document.createElement("div");
    noFeed.setAttribute("class", "loading");
    noFeed.textContent = "Loading...";
    root.appendChild(noFeed);
}

export const createFeedList = (posts) => {

    root.innerHTML = "";
    root.appendChild(postList);

    // const createButton = document.createElement("div");
    // createButton.setAttribute("id", "create-post-button");
    // const createBtn = document.createElement("div");
    // createBtn.setAttribute("id", "invisible-post-button");

    // createButton.innerHTML = `
    //     <img src="https://png.icons8.com/ios/2x/plus.png" alt="create new post" class="img-post-button" />
    // `;
    // root.appendChild(createBtn);
    // root.appendChild(createButton);


    // if (posts.length === 0) {
    //     return loadingContent();
    // }

    posts.forEach((post) => {

        switch (post.type) {
            case "text":
                return createTextPost(post);
            case "image":
                return createImagePost(post);
            case "video":
                return createVideoPost(post);
            default:
                return noFeed();
        }
    })

    // createButton.addEventListener("mouseover", openTypeOfPostsHandler);
}

const openTypeOfPostsHandler = (event) => {

    const create = document.querySelector("#invisible-post-button");

    const imgDiv = document.createElement("div");
    imgDiv.innerHTML = `
    <button class="myBtn create-image">Image</button>
    
    <div id="myModal" class="modal">
    
    <div class="modal-content">
    <span class="close">&times;</span>
                <div class="modal-header">
                <h2>Image Post</h2>
            </div>
            <div class="modal-body">
               <input type="text" placeholder="What's on your mind?" id="new-text-post" />
               <input type="submit" value="Post" id="post-text" />
                <p>Some other text...</p>
            </div>
            <div class="modal-footer">
                <h3>Modal Footer</h3>
            </div>
    </div>
    `;
    create.appendChild(imgDiv);

    const videoDiv = document.createElement("div");
    videoDiv.innerHTML = `
    <button class="myBtn create-video">Video</button>
    <!-- The Modal -->
    <div id="myModal" class="modal">
            <!-- Modal content -->
            <div class="modal-content">
                <div class="modal-header">
                <span class="close">&times;</span>
                <h2>Video Post</h2>
            </div>
            <div class="modal-body">
                <p>Some text in the Modal Body</p>
                <p>Some other text...</p>
            </div>
            <div class="modal-footer">
                <h3>Modal Footer</h3>
            </div>
    </div>
    `;
    create.appendChild(videoDiv);

    const textDiv = document.createElement("div");
    textDiv.innerHTML = `
    <button class="myBtn create-text">Post</button>
    <!-- The Modal -->
    <div id="myModal" class="modal">
            <!-- Modal content -->
            <div class="modal-content">
                <div class="modal-header">
                <span class="close">&times;</span>
                <h2>Text Post</h2>
            </div>
            <div class="modal-body">
                <p>Some text in the Modal Body</p>
                <p>Some other text...</p>
            </div>
            <div class="modal-footer">
                <h3>Modal Footer</h3>
            </div>
    </div>
    `;
    create.appendChild(textDiv);

    createModal();
}

const createModal = (event) => {

    const modal = document.querySelector('#myModal');
    const btns = document.querySelectorAll(".myBtn");
    const span = document.getElementsByClassName("close")[0];
    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            modal.style.display = "block";
        })
    })

    span.addEventListener("click", () => {
        modal.style.display = "none";
    })
}

export const createFilterMenu = () => {

    const filterButton = document.createElement("select");
    filterButton.setAttribute("class", "filter-posts");
    filterButton.innerHTML = `
        <option value="-">Filter Posts</option>
        <option value="all" id="all-posts">All Posts</option>
        <option value="image" id="image-posts">Image Posts</option>
        <option value="text" id="text-posts">Text Posts</option>
        <option value="video" id="video-posts">Video Posts</option>
    `;
    root.prepend(filterButton);
}


