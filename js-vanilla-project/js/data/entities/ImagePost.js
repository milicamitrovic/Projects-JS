import { Post } from "./Post.js";

export class ImagePost extends Post {
    //static TYPE = 'image';

    constructor(id, date, userId, userDisplayName, type, commentsNum, imageUrl) {
        super(id, date, userId, userDisplayName, type, commentsNum)

        this.imageUrl = imageUrl;
    }
}






