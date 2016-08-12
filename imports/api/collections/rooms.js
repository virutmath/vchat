import { Mongo } from 'meteor/mongo';

class RoomsCollection extends Mongo.Collection {

}

export default Rooms = new RoomsCollection('rooms');