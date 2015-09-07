(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['dashboard'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "          <a class=\"mdl-navigation__link\" href=\"#/product/"
    + alias3(((helper = (helper = helpers.parentName || (depth0 != null ? depth0.parentName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"parentName","hash":{},"data":data}) : helper)))
    + "/list/"
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\"><i class=\"mdl-color-text--blue-grey-400 material-icons\">home</i>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "\r\n \r\n<div class=\"demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header\">\r\n      <header class=\"demo-header mdl-layout__header mdl-color--white mdl-color--grey-100 mdl-color-text--grey-600\">\r\n        <div class=\"mdl-layout__header-row\">\r\n          <span class=\"mdl-layout-title\">"
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</span>\r\n          <div class=\"mdl-layout-spacer\"></div>\r\n          \r\n          <a href=\"\">\r\n            <button class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon\" id=\"hdrbtn\">\r\n              <i class=\"material-icons\">arrow_back</i>\r\n            </button>\r\n          </a>\r\n        </div>\r\n      </header>\r\n      <div class=\"demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50\">\r\n        \r\n        <nav class=\"demo-navigation mdl-navigation mdl-color--blue-grey-800\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </nav>\r\n      </div>\r\n      <main class=\"mdl-layout__content mdl-color--grey-100\">\r\n        <div id=\"ingredient-container\" class=\"mdl-grid demo-content \">\r\n        \r\n        </div>\r\n      </main>\r\n</div> \r\n";
},"useData":true});
})();