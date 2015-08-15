Router.route("/", function() {
 this.render("dashboardList", {
  data: function() {
   return {
   }
  }
 });
}, { 
  name: "dashboardList", 
  fastRender: true
});