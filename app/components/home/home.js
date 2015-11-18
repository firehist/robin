angular
	.module('robin.home',[])
	.controller('homeCtrl', homeCtrl);
function homeCtrl() {
	var vm = this;	

	vm.titre = "Page home";
}