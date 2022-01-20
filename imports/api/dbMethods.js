import { Meteor } from 'meteor/meteor';
import { ItemsCollection } from './ItemsCollection'

Meteor.methods({
    'items.insert'(items) {  
        //  Inserting
        
        //  Check if there is a duplicate name if so update. If not insert the entry
        ItemsCollection.update({name: items.name}, {$inc: {count: items.count}}, {upsert: true} )
    },
    'items.remove'(items){
        //  removing
        console.log(items.name)
        ItemsCollection.remove({name: items.name})
    }

});