Template.board.events({
 "click .btn-delete-board": function(e, template) {
  e.preventDefault();
  if (confirm("Are you sure you want to delete the board?")) {
   var boardId = Session.get("currentBoardId");
   Meteor.call("deleteBoard", boardId, function(err) {
    if (err)
     alert(err);
    else
     Router.go("board_list");
   });
  }
 },

 "click .btn-close-board": function(e, template) {
  e.preventDefault();
  Router.go("board_list");
 },

 "sortreceive .board-container": function(e, template) {
 // e.preventDefault();
  var listaTaskId = [];
  var storyId = e.target.dataset.storyId;
  var state = e.target.dataset.state;
  $(e.target).find(".task-move").each(function() {
   listaTaskId.push(this.dataset.taskId);
  });
  Meteor.call("updateTaskState", state, storyId, listaTaskId, function(err) {
   if (err)
    alert(err);
  });
 }
});

Template.board.helpers({
 stateIs: function(state) {
  return this.state === state;
 },
 isOwner: function(userId) {
  return userId == Meteor.userId() ? "" : "disabled";
 }
});
