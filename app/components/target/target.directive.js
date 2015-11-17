angular
	.module('myApp.target', [])
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
	.directive('targetDirective', targetDirective);

	function targetDirective(){
		return {
		restrict: 'E',
        templateUrl: 'app/components/target/target.directive.html',
        scope: true,
		controller: function targetCtrl(){
          	this.titre = 'directive target';
          	this.zones=[];
			this.zones.push({id:"zone0", pt:0, r:"400", stroke:"#fff", fill:"#fff"});
			this.zones.push({id:"zone1", pt:1, r:"150", stroke:"#000", fill:"#fff"});
			this.zones.push({id:"zone2", pt:2, r:"135", stroke:"#000", fill:"#fff"});
			this.zones.push({id:"zone3", pt:3, r:"120", stroke:"#000", fill:"#43484D"});
			this.zones.push({id:"zone4", pt:4, r:"105", stroke:"#fff", fill:"#43484D"});
			this.zones.push({id:"zone5", pt:5, r:"90", stroke:"#000", fill:"#4BB5C1"});
			this.zones.push({id:"zone6", pt:6, r:"75", stroke:"#000", fill:"#4BB5C1"});
			this.zones.push({id:"zone7", pt:7, r:"60", stroke:"#000", fill:"#D15D5C"});
			this.zones.push({id:"zone8", pt:8, r:"45", stroke:"#000", fill:"#D15D5C"});
			this.zones.push({id:"zone9", pt:9, r:"30", stroke:"#000", fill:"#FCFBA9"});
			this.zones.push({id:"zone10", pt:10, r:"15", stroke:"#000", fill:"#FCFBA9"})
        },
        controllerAs: "targetCtrl",
        
    };
		
	}