var robin = angular.module('robin', [
  'ui.router', 
  'firebase',
  'robin.auth',
  'robin.home', 
  'robin.stat', 
  'robin.target'
  ]);

/* -------------------------------------------------------------
  ROUTES
-----------------------------------------------------------------*/
robin.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/home");


    // LOGIN STATES =============================================
   $stateProvider
    .state('login', {
      url: "/login",
      resolve: {
          requireNoAuth: function($state, Auth)
          {
            return Auth.$requireAuth().then(
            function(auth)
            {
              $state.go('home');
            }, 
            function(error)
            {
              return;
            });
          }
        },
      templateUrl: "app/components/auth/login.html",
      controller:"authCtrl", 
      controllerAs:"authCtrl"
    })

    // LOGOUT STATES =============================================
   $stateProvider
    .state('logout', {
      url: "/logout",
      templateUrl: "app/components/auth/logout.html",
      controller:"authCtrl", 
      controllerAs:"authCtrl"
    })

    // REGISTER STATES =============================================
    .state('register', {
        url: '/register',
        resolve: {
          requireNoAuth: function($state, Auth){
            return Auth.$requireAuth().then(function(auth){
              $state.go('home');
            }, function(error){
              return;
            });
          }
        },
        templateUrl: "app/components/auth/register.html",
        controller:"authCtrl", 
        controllerAs:"authCtrl"
      });


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

    .state('stat.point', {
    url: '/point',
    templateUrl: 'app/components/stat/stat-point.html'
    })

    .state('stat.heat', {
    url: '/heat',
    templateUrl: 'app/components/stat/stat-heat.html'
    })
});

/* -------------------------------------------------------------
  DIRECTIVE GLOBALE
-----------------------------------------------------------------*/
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

/* -------------------------------------------------------------
  CONSTANTES
-----------------------------------------------------------------*/
  .constant('FirebaseURL', 'https://robin03.firebaseio.com/');