(function(){

  //'use strict'

  var App = window.App || {};

  App.Controller = Backbone.Controller.extend({
    initialize : function(){
      
    },
    templateLanding : function(){
      //save the view in controller
      var self = this.models;
      if(self.landing){
        var data = {category : self.landing.model.get('Categories')};
        self.landing.view.render(data);
      }
      else{
        //make it automated for each view, like model's attributes
        //same as angular's router, with controller and view
        self.landing = {}
        self.landing.model = new App.Models.CategoryModel();
        this.productData = new App.Collections.Products();
        this.productData.customUrl('');
        this.productData.fetch({
          success: function(res){
            var data = _.flatten(_.map(res.models, function(d){return d.id; }));
            self.landing.model.set('Categories', data);
            self.landing.view = new App.Views.landingView({model:self.landing.model});
          },
          error: function(res){
            console.log(res);
          }
        });
      }
    },
    templateDashboard : function(id){
    //fetch data
     var self = this.models;
      if(self.dashboard===undefined){ 
        self.dashboard={};
        var model = self.dashboard.model = new App.Models.ProductModel(); 
      }else{
        var model = self.dashboard.model;
      }
      model.set('Product',id);
      this.productData = new App.Collections.Products();
      this.productData.customUrl(id);
      this.productData.fetch({
        success: function(res){
          var x = res.models;
            var data = _.flatten(_.pluck(x, 'id'));
            model.set('productList', data);
            if(self.dashboard.view){
              self.dashboard.view.initialize();
            } else{
               self.dashboard.view =  new App.Views.dashboardView({model:model}); 
            }
          }
      });
    },
    templateTable : function(id, lid){
     
      var self = this.models, ths = this, productId = id, listId = lid;

      self.table = self.table || {};
      
      // a refresh operation if both true, else coming from previous page.
      if(self.dashboard===undefined || self.table.model===undefined){
        //check if dashboard is templated and template if not
        if($('.demo-drawer').length===0){
          this.templateDashboard(id);
           //then template the table based on product selected
          var dashboardModel = self.dashboard.model;
          this.listenTo(dashboardModel, 'change:productList', function(id,lid){
            var ingredientList = ths.ingredientList || new App.Collections.Ingredients();
            ingredientList.customUrl(productId,listId);
            ingredientList.fetch({
               success: function(res){
                var x = res.models;
                var data = _.flatten(_.pluck(x, 'id'));
                self.table.model = self.table.model || new App.Models.IngredientModel();
                self.table.model.set('ingredientList', data);

                self.table.model.set('selectedProduct', listId);
                console.log(listId, self.table.model);
                self.table.view = self.table.view || new App.Views.tableView({model:self.table.model}); 
                //initialize table view and template table
              }
            })
          });
        }else{
          var ingredientList = ths.ingredientList || new App.Collections.Ingredients();
            ingredientList.customUrl(productId,listId);
            ingredientList.fetch({
               success: function(res){
                var x = res.models;
                var data = _.flatten(_.pluck(x, 'id'));
                self.table.model = self.table.model || new App.Models.IngredientModel();
                self.table.model.set('ingredientList', data);
                 self.table.model.set('selectedProduct', listId);
                 console.log(listId, self.table.model);
                self.table.view = self.table.view || new App.Views.tableView({model:self.table.model});
                //initialize table view and template table
              }
            })
        } 
      }  else {
        //var dashboardModel = self.dashboard.model;
        self.table.model = self.table.model || new App.Models.IngredientModel();
        var ingredientList = ths.ingredientList ||  new App.Collections.Ingredients();
          ingredientList.customUrl(productId,listId);
          ingredientList.fetch({
             success: function(res){
              var x = res.models;
              var data = _.flatten(_.pluck(x, 'id'));
              self.table.model.set('ingredientList', data);
              self.table.model.set('selectedProduct', listId);
              console.log(listId, self.table.model);
              self.table.view.render({data : data});
            }
          })
      }
    }
  });

})();
