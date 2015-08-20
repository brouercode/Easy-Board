Template.board_story.events({
 "click .btn-delete-story": function(e, template) {
  e.preventDefault();

  if (confirm("Are you sure you want to delete the story?")) {
   var storyId = e.target.parentElement.dataset.storyId;
   Meteor.call("deleteStory", storyId, function(err) {
    if (err)
     alert(err);

   });
  }
 }
});
