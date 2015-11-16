var myApp = angular.module('myApp', ['ui.router', 'myApp.home','myApp.target', 'myApp.stat']);

/* -------------------------------------------------------------
  ROUTES
-----------------------------------------------------------------*/
myApp.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/home");

  // HOME STATES =============================================
   $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "app/components/home/home.html",
      controller:"homeCtrl", 
      controllerAs:"home"
    })

    .state('home.list', {
        url: '/list',
        templateUrl: 'app/components/home/home-list.html',
        controller: function($scope) {
            $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        }
    })

    .state('home.paragraph', {
        url: '/paragraph',
        template: 'I could sure use a drink right now.'
    })


    // STATISTIC STATES =============================================
   $stateProvider
    .state('stat', {
      url: "/stat",
      templateUrl: "app/components/stat/stat.html",
      controller:"statCtrl", 
      controllerAs:"stat"
    })

    .state('stat.heat', {
        url: '/heat',
        templateUrl: 'app/components/stat/stat-heat.html'
    })

});



