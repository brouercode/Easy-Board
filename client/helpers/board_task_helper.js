Template.board_task.events({
 "click .btn-delete-task": function(e, template) {
  e.preventDefault();

  if (confirm("Are you sure you want to delete the task?")) {
   var storyId = e.target.parentElement.dataset.storyId;
   var taskId = e.target.parentElement.dataset.taskId;

   Meteor.call("deleteTask", storyId, taskId, function(err) {
    if (err)
     alert(err);

   });
  }
 }
});