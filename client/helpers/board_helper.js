Template.board.events({
 "submit form": function(e, template) {
  e.preventDefault();
  var _id = Session.get("currentBoardId");
  var nameStory = template.find("#nameStory").value;
  Meteor.call("insertStory", _id, nameStory, function(err) {
   if (err)
    alert(err);
   else
    $(template.find(".modal-add-story")).modal('hide');
  });
 },
 "click .btn-delete-story": function(e, template) {
  e.preventDefault();

  if (confirm("Are you sure you want to delete?")) {
   var boardId = Session.get("currentBoardId");
   var storyId = e.target.dataset.storyId;
   Meteor.call("deleteStory", boardId, storyId, function(err) {
    if (err)
     alert(err);

   });
  }

 }

});

Template.board.onRendered(function() {
 $('.modal-add-story').on('show.bs.modal', function(event) {
  var modal = $(this)
  modal.find('#nameStory')[0].value = "";
 });
});