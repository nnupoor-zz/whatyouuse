(function(){
  var App =   window.App || {};
  App.Views= App.Views || {};


  App.Views.tableView = Backbone.View.extend({
    el : '.view-container',
    events : {
      'click #results' : 'getResults',
      'click input' : 'getSelections'
    },
    initialize: function(){
      var data = {data : this.model.get('ingredientList')};
      this.render(data);
    },
    render: function(data){
      var x  = document.getElementById('ingredient-container');
      var html = Handlebars.templates['table'](data);
      x.innerHTML = html;
      App.updateMDL();
    },
    getSelections: function(event){
        var x = event.currentTarget.parentElement;
        //if it is clicked on th, getAllSelections(selected/deselected)
        if($(x.offsetParent).is('th')){
          var isChecked = $(x).hasClass('is-checked');
          this.getAllSelections(isChecked);
          return;
        }
       //else it is unique selection
        var id = $(x.offsetParent).next().attr('data-attr-id'); 

        if($(x).hasClass('is-checked')){
          //get all ingredientLists, and based on class=ingredient-name.. 
          //find data-attr-id. Select given ingredient based on id.

          var data = this.model.get('selectedData') || [];
          var allData = this.model.get('ingredientList').slice();
          _.each(allData, function(d){ if(d._id===id){data.push(d);} })
        
          this.model.set('selectedData',data);
          console.log(this.model);
        }else{
          //get all ingredientLists, and based on class=ingredient-name 
          //find data-attr-id. Splice given ingredient based on id.
          var selectedData = this.model.get('selectedData');
          var allData = this.model.get('ingredientList').slice();
          var index = _.findIndex(selectedData, {
              _id:id
            });
          if(index != -1) {
            allData.splice(index, 1);
          }
          //set new allData in model as selected data
          this.model.set('selectedData',allData);
          console.log(this.model);
        }
    },
    getAllSelections: function(isChecked){
     //need to change it from depending on class.
      if(isChecked){
        this.model.set('selectedData', this.model.get('ingredientList'));
      } else{
        this.model.set('selectedData', []);
      } 
      
    },
    getResults: function(){

      if(this.model.get('selectedData').length===0){ return;}
      //App.Router.navigate(Backbone.history.fragment)
      var resultController = App.MainController.models;
      if(resultController.results===undefined){
        //create new view and add model and view in controller
        resultController.results = {};
        console.log(this.model);
        resultController.results.model = this.model;
        resultController.results.view = new App.Views.resultsView({model: this.model});
         
      } else{
         console.log(this.model);
        //render view from controller
        resultController.results.view.render({data:this.model.get('selectedData')});
         
      }
    }
  }); 

})();

