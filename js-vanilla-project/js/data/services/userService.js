import { get } from "./APIService.js";
import { usersEndpoint, singleUserEndpoint } from "../shared/constants.js";
import { User } from "../entities/User.js";

class UserService {

    fetchUsers () {
        return get(usersEndpoint)
            .then ((users) => {
                return users.map((user) => {
                    const id = user.id;
                    const name = user.name;
                    const about = user.aboutShort;
                    const postDate = user.lastPostDate;
                    const avatarUrl = user.avatarUrl;

                    const myUser = new User (id, name, about, postDate, avatarUrl);
                    return myUser;
                })
             })
        
    }

    fetchSingleUser (userId) {
        const url= `${singleUserEndpoint}${userId}`;
        return get(url)
            .then((user) => {
                    const id = user.id;
                    const name = user.name;
                    const about = user.aboutShort;
                    const postDate = user.lastPostDate;
                    const avatarUrl = user.avatarUrl;

                    const myUser = new User (id, name, about, postDate, avatarUrl);
                    return myUser;

        })
    }
}

export const userService = new UserService;