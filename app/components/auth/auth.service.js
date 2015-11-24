angular
	.module('robin.auth')
	.factory('Auth', Auth);
function Auth($firebaseAuth, FirebaseURL) 
{
	var ref = new Firebase(FirebaseURL);
	var auth = $firebaseAuth(ref);

	return auth;
}