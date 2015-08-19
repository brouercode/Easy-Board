Template.board_new.events({
 "submit form": function(e, template) {
  e.preventDefault();
  var boardName = template.find("#boardName").value;
  var boardType = template.find("#boardType").value;
  Meteor.call("insertBoard", boardName, boardType, function(err) {
   if (err)
    alert(err);
   else
    Router.go("board_list");
  });

 }
});