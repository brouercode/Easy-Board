Router.route("/board/:_id", function() {

 var _id = this.params._id;
 this.subscribe("board", _id);
 Session.set("currentBoardId", _id);
 this.render("board", {
  data: function() {
   return {
    boardSelected: BoardDB.findOne({_id: _id})
   }
  }
 });
}, {
 name: "board",
 fastRender: true
});