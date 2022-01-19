import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

//  Initialize a MongoDB database to store data
const ItemsCollection = new Mongo.Collection('items')

//  Attach a schema to constrain properties of the collection 
ItemsCollection.schema = new SimpleSchema({
    name: {type: String},
    description: {type: String},
    imageURL: {type: String},
    imageThumbnailURL: {type: String},
    count: {type: Number}
  });

//  Export the  (database) to store all items in one place
exports.ItemsCollection = ItemsCollection;

