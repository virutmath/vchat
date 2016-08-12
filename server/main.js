import {Meteor} from 'meteor/meteor';


Meteor.startup(()=>{
	//create user
	if (!Meteor.users.findOne({roles: {$in: ['admin']}})) {
		var listDefaultAdmin = [{
			username: "admin",
			email: "admin@gmail.com",
			profile: {
				firstName: 'Kien',
				lastName: 'Dang Trung'
			},
			roles: ['admin']
		}];
		_.each(listDefaultAdmin, function (adminUser) {
			var id = Accounts.createUser({
				username: adminUser.username,
				email: adminUser.email,
				profile: adminUser.profile,
				password: '123456',
				createdAt: Date.now()
			});
			if (adminUser.roles.length > 0) {
				Roles.addUsersToRoles(id, adminUser.roles);
			}
		});
	}
});