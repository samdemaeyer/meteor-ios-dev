Template.postSubmit.events({
    'submit form': function(e) {
        e.preventDefault();

        var post = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val()
        };

        Meteor.call('postInsert', post, function(error, result) {
            
            if (error) {
                return alert(error.reason);
            }

            if (result.postExists) {
                IonPopup.alert({
                    title: 'Opps!',
                    template: 'That recipe already exists.',
                    okText: 'Got it Chef!',
                });
            }

            else {
                Router.go('postPage', {
                    _id: result._id
                });
            }

        });
    }
});
