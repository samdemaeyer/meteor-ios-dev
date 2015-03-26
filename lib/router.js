Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() {
        return Meteor.subscribe('posts');
    }
});


Router.map(function() {
    this.route('postsList', {
        path: '/'
    });
    this.route('postPage', {
        path: '/posts/:_id',
        data: function() {
            return Posts.findOne(this.params._id);
        }
    });
    this.route('/submit', {
        name: 'postSubmit'
    });
});


var requireLogin = function() {
    if (!Meteor.user()) {
        IonPopup.alert({
            title: 'Bummer!',
            template: 'You have to be logged in to submit a recipe.',
            okText: 'Got it Chef!',
            onOk: function() {
                Router.go('postsList');
            },
        });
        this.next();
    } else {
        this.next();
    }
}

Router.onBeforeAction('dataNotFound', {
    only: 'postPage'
});

Router.onBeforeAction(requireLogin, {
    only: 'postSubmit'
});
