Template.board_task.events({
 "click .btn-delete-task": function(e, template) {
  e.preventDefault();

  if (confirm("Are you sure you want to delete the task?")) {
   var taskId = e.target.parentElement.dataset.taskId;

   Meteor.call("deleteTask", taskId, function(err) {
    if (err)
     alert(err);

   });
  }
 }
});