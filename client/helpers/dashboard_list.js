Template.dashboardList.helpers({
 // canFollow: function() {
 //  return false;
 // },
 // isFollowing: function() {
 //  return Session.get('isFollowing');
 // }
});

Template.dashboardList.events({
 "submit form": function(e, template) {
  // e.preventDefault();
  // var textarea = template.find("textarea");
  // var name = Meteor.user().profile.name;
  // Meteor.call("publishPost", textarea.value, name);
  // textarea.value = "";
 }
});