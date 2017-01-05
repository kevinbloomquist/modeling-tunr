var db = require('../models');
var Manager = db.models.Manager;

// var managers = [
//   {
//       name: "Ricky Bobby",
//       email: "rbobby@gmail.com",
//       office_number: "516-877-0304",
//       cell_phone_number: "718-989-1231",
//       id: 0
//   },
//   {
//       name: "Kevin",
//       email: "kbloom@gmail.com",
//       office_number: "213-877-0304",
//       cell_phone_number: "213-989-1231",
//       id: 1
//   },
//   {
//       name: "Micah",
//       email: "wierenga.micah@gmail.com",
//       office_number: "719-877-0304",
//       cell_phone_number: "719-989-1231",
//       id: 2
//   }
// ];

function index(req, res) {
	Manager.findAll().then(function(managers) {
		res.json(managers);
	});
}

function show(req, res) {
	// res.json(managers[req.params.id])
	Manager.findById(req.params.id).then(function(manager) {
		res.json(manager);
	});
}

function create(req,res) {
	Manager.create(req.body)
	.then(function(manager){
		// if (!manager) return error(res, "not Saved");
		res.json(manager);
	});
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;