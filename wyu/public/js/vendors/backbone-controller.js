(function(){
    var Controller = Backbone.Controller = function(attributes, options) {
    var attrs = attributes || {};
    options || (options = {});
    this.cid = _.uniqueId(this.cidPrefix);
    this.models = {};
    this.initialize.apply(this, arguments);
  };

  // Attach all inheritable methods to the Model prototype.
  _.extend(Controller.prototype, Backbone.Events, {
    initialize : function(){}
    });

   Controller.extend = Backbone.Model.extend ;
})();
  