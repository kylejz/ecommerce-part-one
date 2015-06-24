var app = angular.module('productsApp');

app.controller('mainCtrl', function($scope, services) {

	var getProductData = function() {
		services.getProductData().then(function(response) {
			$scope.products = response;
			console.log(response)
		})
	}

	$scope.getNewData = function(obj) {
		console.log(obj)
		services.getNewData(obj).then(function(response) {
			$scope.foundProducts = response;
		})
	}

	$scope.createNewItem = function(obj) {
		console.log(obj)
		services.createItem(obj).then(function(response){
			getProductData()
		})
	}

	$scope.editItem = function(num, obj) {
		console.log(num, obj)
		services.editItem(num, obj).then(function(response) {
			getProductData();
		})
	}

	$scope.deleteItem = function(num) {
		console.log(num)
		services.deleteItem(num).then(function(response) {
			getProductData();
		})
	}

	getProductData();

})