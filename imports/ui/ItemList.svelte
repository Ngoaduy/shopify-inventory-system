<script>
import Item from './Item.svelte';
import { ItemsCollection } from '../api/ItemsCollection';

let newItem = {
      name: "",
      count: 0
}

function handleDelete(item) {
        Meteor.call('items.remove', item)
}

$m: items = ItemsCollection.find({}).fetch();   
</script>

<div>
    <header>
        <h1>Inventory</h1>
    </header>
    <ul>
        {#each items as item (item._id)}
          <Item item={item} />
          <td><button class='error' on:click={() => handleDelete(item)}>Delete</button></td>
          <br>
          
      {/each}
      
    </ul>

</div>