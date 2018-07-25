import { get } from "./APIService.js";
import { postsEndpoint } from "../shared/constants.js";
import { Post } from "../entities/Post.js";
import { TextPost } from "../entities/TextPost.js";
import { ImagePost } from "../entities/ImagePost.js";
import { VideoPost } from "../entities/VideoPost.js";


class PostService {

    fetchPosts() {
        return get(postsEndpoint)
            .then(response => {
                return response.filter(post => {
                    if (post.videoUrl) {
                        return post.videoUrl.includes("youtube")
                    }
                    return true
                })
            })
            .then((response) => {

                return response.map((post) => {
                    switch (post.type) {
                        case "text":
                            return new TextPost(post.id, post.date, post.userId, post.userDisplayName, post.type, post.commentsNum, post.text);
                        case "video":
                            return new VideoPost(post.id, post.date, post.userId, post.userDisplayName, post.type, post.commentsNum, post.videoUrl);
                        case "image":
                            return new ImagePost(post.id, post.date, post.userId, post.userDisplayName, post.type, post.commentsNum, post.imageUrl);
                        default:
                            console.log("no posts to show");

                    }
                })

            })
    }
}

export const postService = new PostService;


