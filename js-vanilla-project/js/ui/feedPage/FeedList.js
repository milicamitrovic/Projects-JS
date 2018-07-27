const root = document.querySelector(".root");

const postList = document.createElement("ul");
postList.setAttribute("class", "container main-post-list");

const createVideoPost = (post) => {

    const postLi = document.createElement("li");
    postLi.setAttribute("class", "feed-post video-post");
    postLi.innerHTML = `
        <div class="container" post-id=${post.id}>
            <div class="row" user-id=${post.userId}>
                <div>
                    <iframe width='100%' height='300' src=${post.videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </div>
            </div>
            <div class="">
                <a href="#" class="post-event" post-id=${post.id} post-type=${post.type} user-id=${post.userId}> ${post.commentsNum} comments </a>
            </div>
        </div>
     `;
    postList.appendChild(postLi);
}

const createTextPost = (post) => {
   
    const postLi = document.createElement("li");
    postLi.setAttribute("class", "feed-post text-post");
    postLi.innerHTML = `
    <div class="container" post-id=${post.id}>
        <div class="" user-id=${post.userId}>
            ${post.text}
        </div>
        <div>
           <a href="#" class="post-event" post-id=${post.id} post-type=${post.type}> ${post.commentsNum} comments </a>
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
        <div class="" user-id=${post.userId}>
            <img src=${post.imageUrl} alt=${post.type} class="feed-img" />
        </div>
        <div class="post-event">
            <a href="#" class="post-event" post-id=${post.id} post-type=${post.type}> ${post.commentsNum} comments </a>
        </div>
    </div>
    `;
    postList.appendChild(postLi);
}

export const createFeedList = (posts) => {

    root.innerHTML="";

    root.appendChild(postList);

    posts.forEach((post) => {

        switch (post.type) {
            case "text":
                return createTextPost(post);
            case "video":
                return createVideoPost(post);
            case "image":
                return createImagePost(post)
            default:
                console.log("no posts to show");
        }
    })
}