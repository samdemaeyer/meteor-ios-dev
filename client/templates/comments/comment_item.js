Template.commentItem.helpers({
    author: function() {
        var author = this.author;
        var getName = author.match(/^([^@]*)@/);
        var username = getName ? getName[1] : null;
        return username;
    }
});
