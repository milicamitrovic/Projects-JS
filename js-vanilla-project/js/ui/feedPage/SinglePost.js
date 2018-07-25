const root = document.querySelector(".root");


const createSingleTextPost = (post) => {

    const singlePost = document.createElement("div");
    singlePost.setAttribute("id", "text");

    singlePost.innerHTML = `
        <div class="container>
            <div class="row">
                <div class="post-content text" user-id=${post.userId}>
                    ${post.text}
                </div>
            </div>
        </div>
    `;

    root.appendChild(singlePost);
}

const createSingleVideoPost = (post) => {

    const singlePost = document.createElement("div");
    singlePost.innerHTML = `
        <div class="container>
            <div class="row">
                <div user-id=${post.userId} >
                    <iframe width='100%' height='300' src=${post.videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    `;

    root.appendChild(singlePost);
}

const createSingleImagePost = (post) => {

    const singlePost = document.createElement("div");
    singlePost.innerHTML = `
        <div class="container>
            <div class="row">
                <div class="" user-id=${post.userId}>
                    <img src="${post.imageUrl}" alt="${post.type}" class="single-img" style=" height:500px" />
                </div>
            </div>
        </div>
    `;

    root.appendChild(singlePost);
}



export const createSinglePost = (post) => {

    root.innerHTML = "";

    switch (post.type) {
        case "text":
            return createSingleTextPost(post);
        case "video":
            return createSingleVideoPost(post);
        case "image":
            return createSingleImagePost(post)
        default:
            console.log("no post to show.");
    }
}