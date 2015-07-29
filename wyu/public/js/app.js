(function(){
// DONE FOR MDL AND ROUTING
 /**
   * Performs a "Cutting the mustard" test. If the browser supports the features
   * tested, adds a mdl-js class to the <html> element. It then upgrades all MDL
   * components requiring JavaScript.
  **/
  window.updateMDL = function(){
    if ('classList' in document.createElement('div') &&
        'querySelector' in document &&
        'addEventListener' in window && Array.prototype.forEach) {
      document.documentElement.classList.add('mdl-js');
      componentHandler.upgradeAllRegistered();
    } else {
      componentHandler.upgradeElement =
          componentHandler.register = function() {};
    }
  }


  window.App = {
    Models: {},
    Collection: {},
    Views: {},
    Router: {}
  };

  App.Router = Backbone.Router.extend({
    routes: {
      '': 'index',
      'product': 'prod',
      'product/:id': 'showDetails'
    },
    index: function(){
        var html = Handlebars.templates['landing']();
        var x  = document.getElementById('app-wrapper');
        x.innerHTML = html;
        window.updateMDL();
    },
    prod: function(){
        var html = Handlebars.templates['dashboard']();
        var x  = document.getElementById('app-wrapper');
        x.innerHTML = html;
        window.updateMDL();
    },
    showDetails: function(id){
      var x  = document.getElementById('ingredient-container');
      if(x){
        var html = Handlebars.templates['table']();
        x.innerHTML = html;
      }else{
        this.prod();
        var x  = document.getElementById('ingredient-container');
        var html = Handlebars.templates['table']();
        x.innerHTML = html;
      }
        window.updateMDL();
    }
  });

  var router = new App.Router;
  Backbone.history.start();

 // Backbone.history.start({pushState: true})
})();


