import { Post } from "./Post.js";

export class VideoPost extends Post {
    //static TYPE = 'video';

    constructor(id, date, userId, userDisplayName, type, commentsNum, videoUrl) {
        super(id, date, userId, userDisplayName, type, commentsNum)

        this.videoUrl = videoUrl;
    }
}
