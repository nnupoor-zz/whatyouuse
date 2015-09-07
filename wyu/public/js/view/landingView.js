(function(){
  //var landingView  = ;
  var App =   window.App || {};
 // window.App = app;
  App.Views= {};


  App.Views.landingView = Backbone.View.extend({
    el : '.view-container',
    events : {
      //'click .mdl-js-button' : 'dosomething'
    },
    initialize: function(){
      var data = {category : this.model.get('Categories')};
      this.render(data);
    },
    render :function(data){
      var tpl = Handlebars.templates['landing'];
      var html = tpl(data);
      var x  = document.getElementById('app-wrapper');
      x.innerHTML = html;
      App.updateMDL();
    }
  }); 
})();