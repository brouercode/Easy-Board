Template.board_share.events({
 "click .btn-save-share": function(e, template) {
  e.preventDefault();
  var boardId = Session.get("currentBoardId");
  var userEmail = template.find("#taskName").value;
  Meteor.call("shareBoard", boardId, userEmail, function(err) {
   if (err)
    alert(err);

  });
 }
 
});
