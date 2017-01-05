	angular.module("tunrApp")
	.controller("ManagerIndexController", ManagerIndexController)
	.controller("ManagerShowController", ManagerShowController)
	.controller("ManagerNewController", ManagerNewController);

// var managers = [
//   {
//       name: "Ricky Bobby",
//       email: "rbobby@gmail.com",
//       office_number: "516-877-0304",
//       cell_phone_number: "718-989-1231",
//       id: 2
//   },
//   {
//       name: "Kevin",
//       email: "kbloom@gmail.com",
//       office_number: "213-877-0304",
//       cell_phone_number: "213-989-1231",
//       id: 4
//   },
//   {
//       name: "Micah",
//       email: "wierenga.micah@gmail.com",
//       office_number: "719-877-0304",
//       cell_phone_number: "719-989-1231",
//       id: 2
//   }
// ];

ManagerIndexController.$inject = ["$http"];
function ManagerIndexController($http) {
	var vm = this;
	vm.deleteManager = deleteManager;

	function getAllManagers() {
		$http.get('/api/managers')
			.then(function(response) {
				vm.allManagers = response.data;
			});		
	}

	function deleteManager(manager) {
		$http.delete('/api/managers/' + manager.id)
			.then(function(response) {
				var managerIndex = vm.allManagers.indexOf(manager);
				vm.allManagers.splice(managerIndex, 1);
			});
	}

	getAllManagers();
}

ManagerShowController.$inject = ['$http', '$routeParams'];
function ManagerShowController($http, $routeParams) {
	var vm = this;

	function getOneManager() {
		$http.get('/api/managers/' + $routeParams.id)
		     .then(function(response) {
		     	console.log(response.data);
		     	vm.oneManager = response.data;
		     });
	}

	getOneManager();
}

ManagerNewController.$inject = ['$http','$location'];
function ManagerNewController($http,$location) {
	var vm = this;
	vm.saveManager = saveManager;

	function saveManager() {
		console.log(vm.newManager);
		$http.post('/api/managers', vm.newManager)
		.then(function(response) {
			var manager = response.data;
			$location.path("/managers/" + manager.id);

		
		});
	}
}






