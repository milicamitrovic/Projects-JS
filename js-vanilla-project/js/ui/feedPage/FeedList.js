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


    const createButton = document.createElement("div");
    createButton.setAttribute("id", "create-post-button");
    const createBtn = document.createElement("div");
    createBtn.setAttribute("id", "invisible-post-button");

    createButton.innerHTML = `
        <img src="https://png.icons8.com/ios/2x/plus.png" alt="create new post" class="img-post-button" />
    `;
    root.appendChild(createBtn);
    root.appendChild(createButton);

    root.appendChild(postList);

    if (posts.length === 0) {
        return loadingContent();
    }
    posts.forEach((post) => {

        switch (post.type) {
            case "text":
                return createTextPost(post);
            case "video":
                return createVideoPost(post);
            case "image":
                return createImagePost(post)
            default:
                return noFeed();
        }
    })

    createButton.addEventListener("mouseover", openTypeOfPostsHandler);
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

    // Get the button that opens the modal
    const btns = document.querySelectorAll(".myBtn");

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal 
    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            modal.style.display = "block";
        })

    })

    // When the user clicks on <span> (x), close the modal
    span.addEventListener("click", () => {
        modal.style.display = "none";
    })

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    })
}


