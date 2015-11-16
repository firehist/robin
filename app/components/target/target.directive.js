angular
	.module('myApp.target', [])
	.directive('targetDirective', targetDirective);

	function targetDirective(){
		return {
		restrict: 'E',
        templateUrl: 'app/components/target/target.directive.html',
        scope: true,
		controller: function targetCtrl($scope){
          
          $scope.titre = 'directive target';
        },
    };
		
	}