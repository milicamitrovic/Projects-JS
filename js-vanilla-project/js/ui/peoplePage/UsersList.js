const root = document.querySelector(".root");

export const createUsersList = (users) => {

    root.innerHTML = "";

    const usersList = document.createElement("ul");
    usersList.setAttribute("class", "container users-list");
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    usersList.appendChild(row)

    users.forEach((user) => {

        const userLi = document.createElement("li");
        userLi.setAttribute("class", "user-li col-md-12 col-lg-5 offset-lg-1");
        userLi.innerHTML = `
        
        <div class="container">
            <div class="row">
                <img src=${user.avatarUrl} alt="avatar" class="user-img col-sm-2"/>
                <span class="col-sm-6 user-name"> ${user.name} </span>
            </div>
        </div>
        `;

        root.appendChild(usersList);
        usersList.appendChild(userLi);
    });

}