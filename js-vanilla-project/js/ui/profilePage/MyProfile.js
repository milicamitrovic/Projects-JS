const root = document.querySelector(".root");

export const createMyProfilePage = (user) => {

    root.innerHTML = "";

    const profile = document.createElement("div");
    profile.innerHTML = `
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 profile-photo">
                        <img src=${user.avatarUrl === "" ? "http://www.iglax.org/wp-content/uploads/2014/12/placeholder-Copy-11-1.png" : user.avatarUrl} alt="user profile photo" id="profile-photo" />
                    </div>
                    <div class="col-lg-12 user-name">
                        ${user.name}
                    </div>
                    <div class="col-lg-12 div-edit-profile">
                        <input type="button" class=" edit-profile" value="Edit Profile" id="myBtn" />
                    </div>
                    <p class="col-lg-12 about">
                        <b>About:</b> ${user.aboutShort}
                    </p>
                    <div class="col-sm-12 col-md-12 col-lg-2 offset-lg-4 div-posts-count">
                        <span id="posts-count"> ${user.postsCount} posts </span>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-2 div-comments-count">
                        <span id="comments-count">${user.commentsCount} comments </span>
                    </div>
                </div>
            </div>

            <div id="myModal" class="modal">

                <!-- Modal content -->
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <h1 class="edit-title">Edit Profile</h1>
                    <span><b>Name:</b> </span><input type="text" id="update-name" placeholder="${user.name}" />
                    <span><b>About:</b> </span><input type="text" id="update-about" placeholder="${user.aboutShort}" />
                    <span><b>Photo:</b> </span><input type="text" id="update-photo-link" placeholder="${user.avatarUrl}" />
                    <input type="button" id="update-profile" value="Update" />
                </div>

            </div>
        `;
    root.appendChild(profile);
    createModal();
}

const createModal = (event) => {


    const modal = document.querySelector('#myModal');

    // Get the button that opens the modal
    const btn = document.querySelector("#myBtn");

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal 

    btn.addEventListener("click", () => {
        modal.style.display = "block";
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

const collectUpdateData = (event) => {

    event.preventDefault();

    const nameInput = document.querySelector("#update-name");
    const name = nameInput.value;

    const aboutInput = document.querySelector("#update-about");
    const about = aboutInput.value;

    const photoInput = document.querySelector("#update-photo-link");
    const photo = photoInput.value;

    return updateData = {
        name,
        about,
        photo
    } 
}

const clearUpdatedData = () => {

    event.preventDefault();

    const nameInput = document.querySelector("#update-name");
    nameInput.value = "";
    const aboutInput = document.querySelector("#update-about");
    aboutInput.value = "";
    const photoInput = document.querySelector("#update-photo-link");
    photoInput.value = "";

}