Template.postSubmit.events({
    'submit form': function(e) {
        e.preventDefault();

        var post = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val()
        };

        Meteor.call('postInsert', post, function(error, result) {
            
            if (error) {
                return throwError(error.reason);
            }

            if (result.postExists) {
                throwError('That recipe already exists.');
            }

            else {
                Router.go('postPage', {
                    _id: result._id
                });
            }

        });
    }
});
