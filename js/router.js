// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
	'vm'
], function ($, _, Backbone, Vm) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      '/component/login': 'loginComponent',
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(options){
		var appView = options.appView;
    var router = new AppRouter(options);
		router.on('route:loginComponent', function () {
			require(['views/login/page'], function (LoginPage) {
        var loginPage = Vm.create(appView, 'LoginPage', LoginPage);
        loginPage.render();
      });
		});		
		router.on('route:defaultAction', function (actions) {
			require(['views/dashboard/page'], function (DashboardPage) {
        var dashboardPage = Vm.create(appView, 'DashboardPage', DashboardPage);
        dashboardPage.render();
      });
		});
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
