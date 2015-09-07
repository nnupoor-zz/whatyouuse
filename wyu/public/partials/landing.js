(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['landing'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <div class=\"mdl-grid g-card\">\n       <div class=\"md-cell mdl-cell--4-col mdl-cell--8-col-tablet\">\n        <div class=\"mdl-card mdl-shadow--2dp demo-card-square card--size\">\n        <div class=\"mdl-card__title mdl-card--expand "
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n          <h2 class=\"mdl-card__title-text\"></h2>\n        </div>\n        <div class=\"mdl-card__actions mdl-card--border\" data-attr-category=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">\n          <a class=\"mdl-button mdl-js-button  mdl-button--accent mdl-js-ripple-effect\" href=\"#/product/"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n            "
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "\n        </a>\n        </div>\n        </div>\n        </div>\n      </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "\n\n<div class=\"demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-header\">\n  <header class=\"mdl-layout__header header__landing\">\n    <div class=\"mdl-layout__header-row header-title\">\n      <!-- Title -->\n      <span class=\"mdl-layout-title header-title\">What You Use?</span>\n    </div>\n  </header>\n\n  <!-- <header>\n  <div class=\"header-title mdl-grid\">\n    <div class=\"mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet\"><span>What You Use? </span></div>\n  </div>\n  </header> -->\n\n    <div class='container'>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.category : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "      \n    </div>\n    <footer class=\"mdl-mini-footer footer--style\"> \n        <span></span>\n        <ul>\n         <button class=\"mdl-button mdl-js-button mdl-js-ripple-effect\">About</button>\n         <button class=\"mdl-button mdl-js-button mdl-js-ripple-effect\">Privacy</button>\n        </ul>\n    </footer>\n</div>\n\n";
},"useData":true});
})();