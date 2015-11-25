angular
	.module('robin.stat',[])
	.controller('statCtrl', statCtrl);
function statCtrl() {

  var vm = this;
  vm.titre = "Page: stat";		
	vm.points=[];
	vm.points.push({idFleche:"0", pt:0, cx:"100", cy:"45"});
	vm.points.push({idFleche:"1", pt:1, cx:"150", cy:"234"});
	vm.points.push({idFleche:"2", pt:2, cx:"200", cy:"78"});
}