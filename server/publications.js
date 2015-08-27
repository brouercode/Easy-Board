Meteor.publish("boardListByUser", function() {
  return BoardDB.findByUser(this.userId);
});

Meteor.publish("boardById", function(boardId) {
  return BoardDB.findFaster({
    _id: boardId
  });
});

Meteor.publish("storyByBoardId", function(boardId) {
  return StoryDB.findFaster({
    boardId: boardId
  });
});

Meteor.publish("taskByBoardId", function(boardId) {
  return TaskDB.findFaster({
    boardId: boardId
  });
});