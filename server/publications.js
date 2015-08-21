Meteor.publish("boardListByUser", function() {
  return BoardDB.findByUser(this.userId);
});

Meteor.publish("boardById", function(boardId) {
  return BoardDB.find({
    _id: boardId
  });
});

Meteor.publish("storyByBoardId", function(boardId) {
  return StoryDB.find({
    boardId: boardId
  });
});