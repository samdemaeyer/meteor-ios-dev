Template.postItem.helpers({
    ownPost: function() {
        return this.userId === Meteor.userId();
    },
    domain: function() {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    },
    author: function() {
        var author = this.author;
        var getName = author.match(/^([^@]*)@/);
        var username = getName ? getName[1] : null;
        return username;
    },
    commentsCount: function() {
        return Comments.find({
            postId: this._id
        }).count();
    }
});
