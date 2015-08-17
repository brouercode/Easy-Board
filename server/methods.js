Meteor.methods({
 insertBoard: function(nameBoard, typeBoard) {
  var user = Meteor.user();

  if (!user) // you can also check this.userId here
   throw new Meteor.Error(401, 'Please login.');

  if (!nameBoard)
   throw new Meteor.Error(422, 'Please include a name.');

  if (!typeBoard)
   throw new Meteor.Error(422, 'Please include a type.');

  Board.insertBoard(nameBoard, typeBoard);
 }
});