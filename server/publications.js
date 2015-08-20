Meteor.publish("boardListByUser", function() {
  return BoardDB.find({
    $or: [{
      "listShare": this.userId
    }, {
      "userId": this.userId
    }]
  }, {
    fields: {
      '_id': 1,
      'name': 1,
      'type': 1,
      'userName': 1
    }
  });
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