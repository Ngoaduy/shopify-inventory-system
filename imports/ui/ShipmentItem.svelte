<script>
    export let item;
    import { ItemsCollection } from '../api/ItemsCollection';

let newItem = {
    name: "",
    count: 0
}

$m: items = ItemsCollection.find({}).fetch();  

const handleSubmit = () => {
    console.log('Edit Clicked')
    Meteor.call('items.edit', [item, newItem])
}
</script>




