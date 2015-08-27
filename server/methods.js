Meteor.methods({
 insertBoard: function(boardName, boardType) {
  if (!boardName)
   throw new Meteor.Error(422, 'Please include a name.');

  if (!boardType)
   throw new Meteor.Error(422, 'Please include a type.');

  BoardDB.insertBoard(boardName, boardType);
 },

 deleteBoard: function(id) {
  BoardDB.deleteBoard(id);
 },

 saveStory: function(boardId, storyId, storyName) {
  if (!storyName)
   throw new Meteor.Error(422, 'Please include a name.');

  if (storyId != undefined && storyId != null && storyId != "") {
   StoryDB.updateStory(storyId, storyName);
  }
  else {
   StoryDB.insertStory(boardId, storyName);
  }
 },

 deleteStory: function(storyId) {
  StoryDB.deleteStory(storyId);
 },

 saveTask: function(boardId, storyId, taskId, taskName, taskAssigned, taskState) {
  if (!taskName)
   throw new Meteor.Error(422, 'Please include a name.');
  if (taskId != undefined && taskId != null && taskId != "") {
   TaskDB.updateTask(taskId, taskName, taskAssigned);
  }
  else {
   TaskDB.insertTask(boardId, storyId, taskName, taskAssigned, taskState);
  }
 },

 deleteTask: function(taskId) {
  TaskDB.deleteTask(taskId);
 },

 updateTaskState: function(taskId, state, taskRank) {
  TaskDB.updateTaskState(taskId, state, taskRank);
 },

 shareBoard: function(boardId, userEmail) {

  if (!userEmail)
   throw new Meteor.Error(422, 'Please include a email.');

  var user = UserDB.findByEmail(userEmail);

  if (!user) {
   throw new Meteor.Error(422, 'Email invalid.');
  }

  if (this.userId == user._id) {
   throw new Meteor.Error(422, 'User is the owner.');
  }

  var userShared = BoardDB.verifyShare(boardId, user._id);
  
  if (userShared) {
   throw new Meteor.Error(422, 'User already registered.');
  }

  var u = {
   _id: user._id,
   email: userEmail
  };

  BoardDB.shareBoard(boardId, u);
 },

 unshareBoard: function(boardId, userId) {
  BoardDB.unshareBoard(boardId, userId);
 }

});
