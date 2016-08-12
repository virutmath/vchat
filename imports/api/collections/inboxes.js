import { Mongo } from 'meteor/mongo';

class InboxesCollection extends Mongo.Collection {

}

export const Inboxes = new InboxesCollection('inboxes');