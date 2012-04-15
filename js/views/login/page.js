define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/login/page.html'
], function($, _, Backbone, loginPageTemplate){
  var LoginPage = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(loginPageTemplate);
    }
  });
  return LoginPage;
});
