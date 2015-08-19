Meteor.publish("boardListByUser", function() {
  return BoardDB.find({
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
  return BoardDB.find({
    _id: id
  });
});