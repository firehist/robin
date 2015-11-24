angular
	.module('robin.auth',[])
	.controller('authCtrl', authCtrl);
function authCtrl(Auth, $state) 
{
	var vm = this;

	vm.user = 
	{
		email:'',
		password:''
	};

	vm.login = function()
	{
		Auth
			.$authWithPassword(vm.user)
			.then(function(auth)
			{
				$state.go('home');
			}, 
			function(error)
			{
				vm.error = error;
			});
	};

	vm.register = function()
	{
		Auth
			.$createUser(vm.user)
			.then(function(user)
			{
				vm.login();
			},
			function(error)
			{
				vm.error = error;
			});
	};	
}