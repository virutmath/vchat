import { Mongo } from 'meteor/mongo';

class MessagesCollection extends Mongo.Collection {

}

export default Messages = new MessagesCollection('messages');