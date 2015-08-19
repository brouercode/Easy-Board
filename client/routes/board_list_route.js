Router.route("/board/list", function() {
 this.subscribe("boardListByUser");
 this.render("board_list", {
  data: function() {
   return {
    boards: BoardDB.find({}, {
     sort: {
      name: 1
     }
    })
   }
  }
 });
}, {
 name: "board_list",
 fastRender: true
});