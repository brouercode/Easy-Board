Template.board_task_new.events({
 "submit #form-add-task": function(e, template) {
  e.preventDefault();
  var form = $(e.currentTarget);
  var boardId = Session.get("currentBoardId");
  var storyId = form.find("#storyId")[0].value;
  var taskId = form.find("#taskId")[0].value;
  var taskName = form.find("#taskName")[0].value;
  var taskAssigned = form.find("#taskAssigned")[0].value;

  Meteor.call("saveTask", boardId, storyId, taskId, taskName, taskAssigned, "TODO", function(err) {
   if (err)
    alert(err);
   else
    $(template.find(".modal-add-task")).modal('hide');
  });
 }
});