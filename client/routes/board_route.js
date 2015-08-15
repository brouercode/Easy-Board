Router.route("/board", function() {
 this.render("board", {
  data: function() {
   return {}
  }
 });
}, {
 name: "board",
 fastRender: true
});