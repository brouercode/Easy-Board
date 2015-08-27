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

 "sortstop .board-container": function(e, template) {
  var taskId = e.toElement.dataset.taskId;

  var elTask = $(e.toElement).parent();
  var before = elTask.prev().get(0)
  var after = elTask.next().get(0)

  var newRank = 0;
  if (!before) {
   if (!after) {
    newRank = 1;
   }else{
   newRank = Blaze.getData(after).rank/2 
   }
  }
  else if (!after) {
   newRank = Blaze.getData(before).rank + 1
  }
  else
   newRank = (Blaze.getData(after).rank +
    Blaze.getData(before).rank) / 2

  var state = elTask.parents(".board-container").get(0).dataset.state;

  Meteor.call("updateTaskState", taskId, state, newRank, function(err) {
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
 },
 getListTask: function(storyId, state) {
  return TaskDB.find({
   storyId: storyId,
   state: state
  }, {
   sort: {
    rank: 1
   }
  });
 }
});
