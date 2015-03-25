AutoForm.hooks({
  'add-form': {
    onSuccess: function (operation, result, template) {
      console.log('Post saved successfully!');
    },

    onError: function(operation, error, template) {
      console.log(error);
    }
  }
});