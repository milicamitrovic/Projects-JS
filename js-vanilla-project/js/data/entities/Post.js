export class Post {
    constructor(id, dateCreated, userId, userDisplayName, type, commentsNum) {
        this.id = id;
        this.dateCreated = dateCreated;
        this.userId = userId;
        this.userDisplayName = userDisplayName;
        this.type = type;
        this.commentsNum = commentsNum;
    }
}