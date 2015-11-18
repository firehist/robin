angular
	.module('robin.target', [])
	.directive('target', target);

	function target(){
		return {
			restrict: 'E',
	        templateUrl: 'app/components/target/target.html',
	        scope:{
	        	mode: '@',
	        	points: '@'
	        },

			controller: function targetCtrl($scope){

				var vm = this;

	          	vm.titre = 'target none';

	          	vm.zones=[];
				vm.zones.push({id:"zone0", pt:0, r:"400", stroke:"#fff", fill:"#eee"});
				vm.zones.push({id:"zone1", pt:1, r:"150", stroke:"#000", fill:"#fff"});
				vm.zones.push({id:"zone2", pt:2, r:"135", stroke:"#000", fill:"#fff"});
				vm.zones.push({id:"zone3", pt:3, r:"120", stroke:"#000", fill:"#43484D"});
				vm.zones.push({id:"zone4", pt:4, r:"105", stroke:"#fff", fill:"#43484D"});
				vm.zones.push({id:"zone5", pt:5, r:"90", stroke:"#000", fill:"#4BB5C1"});
				vm.zones.push({id:"zone6", pt:6, r:"75", stroke:"#000", fill:"#4BB5C1"});
				vm.zones.push({id:"zone7", pt:7, r:"60", stroke:"#000", fill:"#D15D5C"});
				vm.zones.push({id:"zone8", pt:8, r:"45", stroke:"#000", fill:"#D15D5C"});
				vm.zones.push({id:"zone9", pt:9, r:"30", stroke:"#000", fill:"#FCFBA9"});
				vm.zones.push({id:"zone10", pt:10, r:"15", stroke:"#000", fill:"#FCFBA9"});

				if($scope.mode =="point")
				{
					vm.zones.push({id:"zone1", pt:1, r:"10", stroke:"#000", fill:"#ccc"});
				}

		    },
	        controllerAs: "targetCtrl",
        };	
	}