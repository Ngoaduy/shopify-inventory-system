<script>
import Item from './Item.svelte';
import { ItemsCollection } from '../api/ItemsCollection';

$m: items = ItemsCollection.find({}).fetch();   
</script>

<div>
    <header>
        <h1>Inventory</h1>
    </header>
    <ul>
        {#each items as item (item._id)}
          <Item item={item} />
          <h3> </h3>
      {/each}
    </ul>

</div>