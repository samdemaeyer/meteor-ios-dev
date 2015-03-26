Posts = new Mongo.Collection('posts');

Posts.attachSchema(new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200,
        autoform: {
            'label-type': 'stacked'
        }
    },
    url: {
        type: String,
        label: "URL",
        max: 200,
        autoform: {
            'label-type': 'stacked'
        }
    }
}));

Posts.allow({
    insert: function(userId, doc) {
        return !!userId;
    }
});
