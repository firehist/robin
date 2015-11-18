var robin = angular.module('robin', ['ui.router', 'robin.home', 'robin.stat', 'robin.target']);

/* -------------------------------------------------------------
  ROUTES
-----------------------------------------------------------------*/
robin.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/home");

  // HOME STATES =============================================
   $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "app/components/home/home.html",
      controller:"homeCtrl", 
      controllerAs:"homeCtrl"
    })


  // STATISTIC STATES =============================================
   $stateProvider
    .state('stat', {
      url: "/stat",
      templateUrl: "app/components/stat/stat.html",
      controller:"statCtrl", 
      controllerAs:"statCtrl"
    })

    .state('stat.heat', {
    url: '/heat',
    templateUrl: 'app/components/stat/stat-heat.html'
    })
});


angular
  .module('robin')
  .directive('delay', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        for (var i in attrs) {
          var matches = i.match(/^delay([A-Z].*)/);
          if (attrs.hasOwnProperty(i) && matches && matches[1]) {
            (function() {
              var realName = matches[1].toLowerCase();
              scope.$watch(attrs[i], function(newValue, oldValue) {
                    element.attr(realName, newValue);
                  });
            })();
            
          }
        }
          }
    };    
  })
