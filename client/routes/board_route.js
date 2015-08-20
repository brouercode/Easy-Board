Router.route("/board/:_id", function() {
 var boardId = this.params._id;
 this.subscribe("boardById", boardId);
 this.subscribe("storyByBoardId", boardId);
 Session.set("currentBoardId", boardId);
 this.render("board", {
  data: function() {
   return {
    boardSelected: BoardDB.findOne({_id: boardId}),
    storiesForBoard: StoryDB.find({boardId: boardId})
   }
  }
 });
}, {
 name: "board"
});