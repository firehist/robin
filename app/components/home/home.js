angular
	.module('myApp.home',[])
	.controller('homeCtrl', homeCtrl);
function homeCtrl() {

  var vm = this;
  vm.titre = "Page: home";
  vm.date="1928383";		
}