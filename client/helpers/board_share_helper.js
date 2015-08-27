Template.board_share.events({
 "click #btn-save-share": function(e, template) {
  e.preventDefault();
  var boardId = Session.get("currentBoardId");
  var inputTaskName = template.find("#taskName");
  var userEmail = inputTaskName.value;
  Meteor.call("shareBoard", boardId, userEmail, function(err) {
   if (err) {
    alert(err);
   }
   else {
    inputTaskName.value = "";
   }

  });
 },

 "click #btn-unshare": function(e, template) {
  e.preventDefault();
  if (confirm("Are you sure you want to remove the share?")) {
   var boardId = Session.get("currentBoardId");
   var userId = e.target.dataset.userId;;

   Meteor.call("unshareBoard", boardId, userId, function(err) {
    if (err) {
     alert(err);
    }
   });
  }
 }



});
