import Messages from './collections/messages';
import Rooms from './collections/rooms';
import Inboxes from './collections/inboxes';
import Clients from './collections/clients';

let Schema = {};
Schema.Client = new SimpleSchema({
	name: {
		type: String
	},
	domain: {
		type: String
	},
	code: {
		type: String
	},
	type: {
		type: String
	},
	createdAt: {
		type: Date
	}
});

Clients.attachSchema(Schema.Client);

Schema.UserCountry = new SimpleSchema({
	name: {
		type: String
	},
	code: {
		type: String,
		regEx: /^[A-Z]{2}$/
	}
});

Schema.UserProfile = new SimpleSchema({
	firstName: {
		type: String,
		optional: true
	},
	lastName: {
		type: String,
		optional: true
	},
	birthday: {
		type: Date,
		optional: true
	},
	gender: {
		type: String,
		allowedValues: ['Male', 'Female'],
		optional: true
	},
	organization : {
		type: String,
		optional: true
	},
	website: {
		type: String,
		regEx: SimpleSchema.RegEx.Url,
		optional: true
	},
	bio: {
		type: String,
		optional: true
	},
	country: {
		type: Schema.UserCountry,
		optional: true
	}
});

Schema.User = new SimpleSchema({
	username: {
		type: String,
		optional: true
	},
	client: {
		type: Schema.Client
	},
	emails: {
		type: Array,
		optional: true
	},
	"emails.$": {
		type: Object
	},
	"emails.$.address": {
		type: String,
		regEx: SimpleSchema.RegEx.Email
	},
	"emails.$.verified": {
		type: Boolean
	},
	createdAt: {
		type: Date
	},
	profile: {
		type: Schema.UserProfile,
		optional: true
	},
	// Make sure this services field is in your schema if you're using any of the accounts packages
	services: {
		type: Object,
		optional: true,
		blackbox: true
	},
	roles: {
		type: Object,
		optional: true,
		blackbox: true
	},
	// In order to avoid an 'Exception in setInterval callback' from Meteor
	heartbeat: {
		type: Date,
		optional: true
	}
});

Meteor.users.attachSchema(Schema.User);

Schema.Message = new SimpleSchema({
	user: {
		type: Schema.User
	},
	content: {
		type: String,
		max: 300
	},
	createdAt: {
		type: Date
	},
	updatedAt: {
		type: Date
	}
});

Messages.attachSchema(Schema.Message);

Schema.Room = new SimpleSchema({
	name: {
		type: String,
		optional: true
	},
	messages: {
		type: [Schema.Message]
	},
	users: {
		type: [Schema.User]
	},
	createdAt: {
		type: Date
	},
	updatedAt: {
		type: Date
	}
});

Rooms.attachSchema(Schema.Room);

Schema.Inbox = new SimpleSchema({
	user: {
		type: Schema.User
	},
	messages_id: {
		type: [String]
	},
	status: {
		type: Number
	}
});