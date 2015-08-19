Template.board.events({
 "submit #form-add-story": function(e, template) {
  e.preventDefault();
  var _id = Session.get("currentBoardId");
  var storyName = template.find("#storyName").value;
  Meteor.call("insertStory", _id, storyName, function(err) {
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
   var storyId = e.target.parentElement.dataset.storyId;

   Meteor.call("deleteStory", boardId, storyId, function(err) {
    if (err)
     alert(err);

   });
  }
 },

 "submit #form-add-task": function(e, template) {
  e.preventDefault();
  var _id = Session.get("currentBoardId");
  var storyId = template.find("#storyId").value;
  var taskName = template.find("#taskName").value;
  Meteor.call("insertTask", _id, storyId, taskName, "TODO", function(err) {
   if (err)
    alert(err);
   else
    $(template.find(".modal-add-task")).modal('hide');
  });
 },

 "click .btn-delete-task": function(e, template) {
  e.preventDefault();

  if (confirm("Are you sure you want to delete?")) {
   var boardId = Session.get("currentBoardId");
   var storyId = e.target.parentElement.dataset.storyId;
   var taskId = e.target.parentElement.dataset.taskId;

   Meteor.call("deleteTask", boardId, storyId, taskId, function(err) {
    if (err)
     alert(err);

   });
  }
 },

 "sortreceive .board-container": function(e, template) {
  e.preventDefault();
  var listaTaskId = [];
  var boardId = Session.get("currentBoardId");
  var storyId = e.target.dataset.storyId;
  var state = e.target.dataset.state;
  $(e.target).find(".task-move").each(function() {
   listaTaskId.push(this.dataset.taskId);
  });
  Meteor.call("updateTask", boardId, state, storyId, listaTaskId, function(err) {
   if (err)
    alert(err);

  });

 }
});

Template.board.helpers({
 stateIs: function(state) {
  return this.state === state;
 }
});
