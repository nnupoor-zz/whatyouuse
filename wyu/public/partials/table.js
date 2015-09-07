(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['table'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <tr>\r\n              <td class=\"mdl-data-table__cell--non-numeric ingredient-name\" data-attr-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\r\n            </tr>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "  <table class=\"mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp mdl-color--blue-700 mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--10-col-desktop mdl-cell--stretch\">\r\n          <thead>\r\n            <tr>\r\n              <th class=\"mdl-data-table__cell--non-numeric\">Material</th>\r\n              \r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            \r\n          </tbody>\r\n</table>\r\n\r\n<div class=\"mdl-grid get-results\">\r\n  <div class=\"mdl-cell \">\r\n  \r\n   <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent\" id=\"results\">\r\n     Go!\r\n   </button>\r\n  </div>\r\n \r\n</div>\r\n\r\n";
},"useData":true});
})();