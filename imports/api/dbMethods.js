import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { ItemsCollection } from './ItemsCollection'

Meteor.methods({
    'items.insert'(items) {  
        //  Inserting
        
        //  Check if there is a duplicate name if so update. If not insert the entry
        ItemsCollection.update({name: items.name}, {$inc: {count: items.count}}, {upsert: true} )
    },
    'items.remove'(items){
        ItemsCollection.remove(this._id)
        //  removing
    }

});