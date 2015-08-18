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
 },
 deleteBoard: function(id) {
  var user = Meteor.user();

  if (!user) // you can also check this.userId here
   throw new Meteor.Error(401, 'Please login.');

  if (!id)
   throw new Meteor.Error(422, 'Please include a name.');

  Board.deleteBoard(id);
 },
 insertStory: function(_id, nameStory) {
  var user = Meteor.user();

  if (!user) // you can also check this.userId here
   throw new Meteor.Error(401, 'Please login.');

  Board.insertStory(_id, nameStory);
 },
 deleteStory: function(_id, storyId) {
  var user = Meteor.user();

  if (!user) // you can also check this.userId here
   throw new Meteor.Error(401, 'Please login.');

  Board.deleteStory(_id, storyId);
 },
});

