import { Meteor } from 'meteor/meteor';
import { ItemsCollection } from './ItemsCollection'

let newItems = {
    name: "",
    count: 0
}

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
    },
    'items.edit'([items, newItems])
    {
        //  editing
        console.log(newItems.name)
        ItemsCollection.update({name: items.name}, {
                                $set: { name: newItems.name }
                            }
                        );
        ItemsCollection.update({count: items.count}, {
                                $set: { count: newItems.count }
                        }
                    );
                        
    },
    'items.shipment'(items) {    
        ItemsCollection.update({name: items.name}, {$inc: {count: -items.count}}, {upsert: false} )
    },


});