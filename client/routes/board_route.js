Router.route("/board/:_id", function() {
 var boardId = this.params._id;
 this.subscribe("boardById", boardId);
 this.subscribe("storyByBoardId", boardId);
 this.subscribe("taskByBoardId", boardId);
 Session.set("currentBoardId", boardId);
 this.render("board", {
  data: function() {
   return {
    boardSelected: BoardDB.findOneFaster({
     _id: boardId
    }),
    storiesForBoard: StoryDB.findFaster({
     boardId: boardId
    })
   }
  }
 });
}, {
 name: "board", 
  fastRender: true
});