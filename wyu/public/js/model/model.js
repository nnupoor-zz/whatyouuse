(function(){
  window.App;
  window.App = window.App || {};
  App.Models= {};
  App.Collections= {};

  App.Models.CategoryModel = Backbone.Model.extend({});

  App.Models.ProductModel = Backbone.Model.extend({
      productList : ''
    
  });

  App.Models.IngredientModel = Backbone.Model.extend({
      selectedProduct : '',
      selectedData : [],
      initialize : function(){
        this.bind("change:selectedProduct", this.productChangeHandler);
      },
      productChangeHandler : function(){
        this.set('selectedData', []);
        console.log(this.attributes);
      }
  });


  App.Collections.Ingredients = Backbone.Collection.extend({
    customUrl: function(productId,lid) {
      var baseUrl = 'product/'+productId+'/list/'+lid;
      this.url= baseUrl;
    },
    parse : function(response){
      var x = {}; 
      x.id = response;
      return x;
    }
  });

  App.Collections.Products = Backbone.Collection.extend({
    customUrl: function(productId) {
      var baseUrl = '/product/';
      this.url= baseUrl + productId;
    },
    parse : function(response){
      var x = {}; 
      x.id = response;
    //  console.log(response);
      return x;
    }
  });



})();