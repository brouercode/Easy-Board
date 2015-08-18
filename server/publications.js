Meteor.publish("boardListByUser", function() {
  return Board.find({
    userId: this.userId
  }, {
    fields: {
      '_id': 1,
      'name': 1,
      'type': 1,
      'userName': 1
    }
  });
});

Meteor.publish("board", function(id) {
  return Board.find({
    _id: id
  });
});