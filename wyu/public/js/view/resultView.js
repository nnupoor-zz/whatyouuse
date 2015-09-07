(function(){
  var App =   window.App || {};
  App.Views= App.Views || {};


  App.Views.resultsView = Backbone.View.extend({
    el : '.view-container',
    events : {
     'click #results' : 'initialize'
    },
    initialize: function(){
      var data = {data : this.model.get('selectedData')};
      console.log(this.model);
      this.render(data);
    },
    render :function(data){
      var x  = document.getElementById('ingredient-container');
      var html = Handlebars.templates['results'](data);
      x.innerHTML = html;
      App.updateMDL(); 
    }
  }); 

})();