var app = angular.module('productsApp')

app.service('services', function($q, $http) {

	this.getProductData = function() {
		 var dfrd = $q.defer();
		 $http({
			method: "GET",
			url: "http://localhost:9001/api/products"
		}).then(function(response) {
			dfrd.resolve(response.data)
		})
		return dfrd.promise
	}

	this.getNewData = function(obj) {
		var dfrd = $q.defer();
		 $http({
			method: "GET",
			url: "http://localhost:9001/api/products?" + obj.prop + "=" + obj.val
		}).then(function(response) {
			console.log(response)
			dfrd.resolve(response.data)
		})
		return dfrd.promise
	}

	this.createItem = function(obj) {
		return $http({
			method: "POST",
			url: "http://localhost:9001/api/products?",
			data: obj
		})
	}

	this.editItem = function(num, obj) {
		return $http({
			method:"PUT",
			url: "http://localhost:9001/api/products?id=" + num,
			data: obj
		})
	}

	this.deleteItem = function(num) {
		return $http({
			method:"DELETE",
			url: "http://localhost:9001/api/products?id=" + num,
		})
	}
})