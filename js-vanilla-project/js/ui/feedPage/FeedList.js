const root = document.querySelector(".root");
const postList = document.createElement("ul");

postList.setAttribute("class", "container main-post-list");


// const createVideoPost = (post, user) => {
    
//     const postLi = document.createElement("li");
//     postLi.classList.add("video-post");
//     postLi.innerHTML = `
//         <div class="container " data-id="${post.id}">
//             <div>
//                 <img src="${user.avatarUrl}" alt="avatar" class="user-img col-sm-2"/>
//                 <span class="col-sm-6 user-name"> ${user.name} </span>
//             </div>
//             <div class="view-video-post" user-id="${post.userId}">
//                 <iframe src="${post.videoUrl}" frameBorder="0" allow="autoplay" allowFullScreen></iframe>
//             </div>
//             <div>
//                 ${post.commentsNum} comments
//             </div>
//         </div>
//     `;

//     postList.appendChild(postLi);
// }

const createTextPost = (post, user) => {

    const postLi = document.createElement("li");
    postLi.classList.add("text-post");
    postLi.innerHTML = `
        <div class="container " data-id=${post.id}>
            <div>
                <img src=${user.avatarUrl} alt="avatar" class="user-img col-sm-2"/>
                <span class="col-sm-6 user-name"> ${user.name} </span>
            </div>          
            <div class="view-text-post" user-id=${post.userId}>
                ${post.text}
            </div>
            <div>
                ${post.commentsNum} comments
            </div>
            </div>
        </div>
    `;
    postList.appendChild(postLi);
}

const createImagePost = (post, user) => {

    const postLi = document.createElement("li");
    postLi.classList.add("image-post");
    postLi.innerHTML = `
        <div class="container " data-id=${post.id}>
            <div>
                <img src=${user.avatarUrl} alt="avatar" class="user-img col-sm-2"/>
                <span class="col-sm-6 user-name"> ${user.name} </span>
            </div>
            <div class="" user-id=${post.userId}>
                <img src=${post.imageUrl} alt=${post.type} class="view-img-post" />
            </div>
            <div>
                ${post.commentsNum} comments
            </div>
        </div>
    `;
    postList.appendChild(postLi);
}

export const createFeedList = (post, user) => {
  
    
    root.innerHTML = "";

    root.appendChild(postList);

        switch (post.type) {
            case "text":
                return createTextPost(post, user);
            // case "video":
            //     return createVideoPost(post, user);
            case "image":
                return createImagePost(post, user)
            default:
                console.log("no posts to show");
        }
}

