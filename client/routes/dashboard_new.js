Router.route("/new", function() {
 this.render("dashboardNew", {
  data: function() {
   return {
   }
  }
 });
}, { 
  name: "dashboardNew", 
  fastRender: true
});