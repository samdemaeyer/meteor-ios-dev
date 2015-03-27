Template.postEdit.events({
    'submit form': function(e) {
        e.preventDefault();

        var currentPostId = this._id;

        var postProperties = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val()
        }

        Posts.update(currentPostId, {
            $set: postProperties
        }, function(error) {
            if (error) {
                IonPopup.alert({
                	title: 'Bummer!',
                	template: error.reason,
                	okText: 'Got it Chef!',
                });
            } else {
                Router.go('postPage', {
                    _id: currentPostId
                });
            }
        });
    },

    'click .delete': function(e) {
        e.preventDefault();

        IonPopup.confirm({
            title: 'Delete recipe',
            template: 'Are you sure?',
            onOk: function() {
                var currentPostId = this._id;
                Posts.remove(currentPostId);
                Router.go('postsList');
            },
            onCancel: function() {
                return;
            }
        });
    }
});
