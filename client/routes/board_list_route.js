Router.route("/board_list", function() {
 this.render("board_list", {
  data: function() {
   return {}
  }
 });
}, {
 name: "board_list",
 fastRender: true
});