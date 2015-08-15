Router.route("/board/new", function() {
 this.render("board_new", {
  data: function() {
   return {
   }
  }
 });
}, { 
  name: "board_new", 
  fastRender: true
});