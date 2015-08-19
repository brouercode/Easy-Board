Meteor.methods({
 insertBoard: function(boardName, boardType) {
  if (!boardName)
   throw new Meteor.Error(422, 'Please include a name.');

  if (!boardType)
   throw new Meteor.Error(422, 'Please include a type.');

  BoardDB.insertBoard(boardName, boardType);
 },

 deleteBoard: function(id) {
  if (!id)
   throw new Meteor.Error(422, 'Please include a name.');

  BoardDB.deleteBoard(id);
 },

 insertStory: function(_id, storyName) {
  BoardDB.insertStory(_id, storyName);
 },

 deleteStory: function(_id, storyId) {
  BoardDB.deleteStory(_id, storyId);
 },

 insertTask: function(_id, storyId, taskName, taskState) {
  BoardDB.insertTask(_id, storyId, taskName, taskState);
 },

 deleteTask: function(_id, storyId, taskId) {
  BoardDB.deleteTask(_id, storyId, taskId);
 },

 updateTask: function(_id, state, storyId, listTaskId) {
  BoardDB.updateTask(_id, state, storyId, listTaskId);
 }

});
