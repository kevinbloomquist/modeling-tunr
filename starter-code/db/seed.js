var DB = require("../models").models;

var artistCreate = function() {
	return DB.Artist.create({
    name: 'Not right yet',
    photoUrl: 'www.zombo.com',
    nationality: 'Zombie',
    instrument: 'Brains',
    home_address: 'Atlanta'
  });
};


var managerCreate = function() {
	return DB.Manager.create({
		name: 'Sleezy Pete',
		email: 'Greezy@mail.com',
		office_number: '1234',
		cell_phone_number: '222.222.2222'
	});
};
artistCreate()
.then(managerCreate())
.then(function() {
	process.exit();
});


