var App = angular.module('App', []);

App.controller('TodoCtrl', function($scope, $http) {
	$scope.todos = [];
  $http.get('todos.json')
  		.success(function (data){
  			$scope.todos = data;
  		})
  		.error(function (data, status, headers, config) {
  			console.log("ERROR");
  		});
  		// })
    //    .then(function(res){
    //       $scope.todos = res.data;                
    //     });
});