Router.route("/", function() {
 this.render("home", {
  onBeforeAction: function() {
   if (Meteor.userId()) {
    Router.go('board');
   }
   else {
    this.next();
   }
  }
 });
}, {
 name: 'home',
 fastRender: true
});