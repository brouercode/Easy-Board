Template.board_new.events({
 "submit form": function(e, template) {
  e.preventDefault();
  var nameBoard = template.find("#nameBoard").value;
  var typeBoard = template.find("#typeBoard").value;
  Meteor.call("insertBoard", nameBoard, typeBoard, function(err) {
   if (err)
    alert(err);
   else
    Router.go("board_list");
  });

 }
});