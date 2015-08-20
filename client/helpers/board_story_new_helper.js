Template.board_story_new.events({
 "submit #form-add-story": function(e, template) {
  e.preventDefault();
  var form = $(e.currentTarget);
  var boardId = Session.get("currentBoardId");
  var storyName = form.find("#storyName")[0].value;
  var storyId = form.find("#storyId")[0].value;
  Meteor.call("saveStory", boardId, storyId, storyName, function(err) {
   if (err)
    alert(err);
   else
    $(template.find(".modal-add-story")).modal('hide');
  });
 }
});
