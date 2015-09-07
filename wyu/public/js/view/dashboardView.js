(function(){
  var App =   window.App || {};
  App.Views= App.Views || {};


  App.Views.dashboardView = Backbone.View.extend({
    el : '.view-container',
    events : {
      'click #hdrbtn' : 'goBack'
    },
    initialize: function(){
      var data = {data : this.model.get('productList'), name : this.model.get('Product')};
      this.render(data);
    },
    render: function(data){
      var html = Handlebars.templates['dashboard'](data);
      var x  = document.getElementById('app-wrapper');
      x.innerHTML = html;
      App.updateMDL();
    },
    goBack: function(){
      
    } 
  }); 

})();