angular
	.module('robin.stat',[])
	.controller('statCtrl', statCtrl);
function statCtrl() {

  var vm = this;
  vm.titre = "Page: stat";		
	vm.points=[];
	vm.points.push({id:"point0", pt:0, r:"90", stroke:"#fff", fill:"#eee"});
	vm.points.push({id:"point1", pt:1, r:"47", stroke:"#000", fill:"#eee"});
	vm.points.push({id:"point2", pt:2, r:"89", stroke:"#000", fill:"#eee"});


	vm.test = function test() { console.log('toto', vm.points); };
}