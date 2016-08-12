import { Mongo } from 'meteor/mongo';

class ClientsCollection extends Mongo.Collection {

}

export default Clients = new ClientsCollection('clients');