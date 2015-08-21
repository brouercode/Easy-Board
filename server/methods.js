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

 saveTask: function(storyId, taskId, taskName, taskAssigned, taskState) {
  if (taskId != undefined && taskId != null && taskId != "") {
   StoryDB.updateTask(storyId, taskId, taskName, taskAssigned);
  }
  else {
   StoryDB.insertTask(storyId, taskName, taskAssigned, taskState);
  }
 },

 deleteTask: function(storyId, taskId) {
  StoryDB.deleteTask(storyId, taskId);
 },

 updateTaskState: function(state, storyId, listTaskId) {
  StoryDB.updateTaskState(state, storyId, listTaskId);
 },

 shareBoard: function(boardId, userEmail) {
  //BoardDB.updateTaskState(state, storyId, listTaskId);
 }
 

});
