(function(){
// DONE FOR MDL AND ROUTING
 /**
   * Performs a "Cutting the mustard" test. If the browser supports the features
   * tested, adds a mdl-js class to the <html> element. It then upgrades all MDL
   * components requiring JavaScript.
  **/
  var App =   window.App || {};
  App.Router = {};
  App.updateMDL= function(){
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
  


  App.Router = Backbone.Router.extend({
    routes: {
      '': 'index',
      'product/:id': 'prod',
      'product/:id/list/:lid': 'showDetails'
    },
    index: function(){ 
      App.MainController.templateLanding();
    },
    prod: function(id){
      App.MainController.templateDashboard(id);
    },
    showDetails: function(id,lid){
      App.MainController.templateTable(id,lid);
    }
  });

  var router = new App.Router;
  App.MainController = new App.Controller();
  
  Backbone.history.start();

})();


