(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['results'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <div class=\"mdl-grid demo-content\">\r\n            <div class=\"mdl-card mdl-cell mdl-cell--12-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone mdl-shadow--2dp\">\r\n              <div class=\"mdl-card__title mdl-color--blue-700\">\r\n                <div class=\"mdl-card__title-text\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\r\n              </div>\r\n              <div class=\"mdl-card__supporting-text\">\r\n              \r\n                <div class=\"demo-grid-2 mdl-grid\">\r\n                  <div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone\">\r\n                    <h4> Properties </h4>\r\n                    <div class=\"mdl-card__supporting-text\">\r\n                      "
    + alias3(((helper = (helper = helpers.Properties || (depth0 != null ? depth0.Properties : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Properties","hash":{},"data":data}) : helper)))
    + "\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone\">\r\n                    <h4> Effects </h4>\r\n                    <div class=\"mdl-card__supporting-text\">\r\n                      "
    + alias3(((helper = (helper = helpers.Effects || (depth0 != null ? depth0.Effects : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Effects","hash":{},"data":data}) : helper)))
    + "\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone\">\r\n                    <h4> Side Effects </h4>\r\n                    <div class=\"mdl-card__supporting-text\">\r\n                      "
    + alias3(((helper = (helper = helpers.SideEffects || (depth0 != null ? depth0.SideEffects : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"SideEffects","hash":{},"data":data}) : helper)))
    + "\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              \r\n        \r\n              <div class=\"mdl-card__menu\">\r\n                <button class=\"mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect\">\r\n                  <i class=\"material-icons\">close</i>\r\n                </button>\r\n              </div>\r\n            </div>  \r\n        </div> \r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "\r\n      <main class=\"mdl-layout__content mdl-color--grey-A400 \">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "      </main>    \r\n   ";
},"useData":true});
})();