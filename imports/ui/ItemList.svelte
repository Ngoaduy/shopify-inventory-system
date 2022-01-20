<script>
import Item from './Item.svelte';
import { ItemsCollection } from '../api/ItemsCollection';
import ShipmentItem from './ShipmentItem.svelte';


$m: items = ItemsCollection.find({}).fetch();

let newCount = 0;

var newCountArray = [];

const handleShipment = () => {
    items.forEach(item => {
        newCountArray.push(0);
        Meteor.call('items.shipment', item)
    });
}

</script>

<div>
    <header>
        <h1>Inventory</h1>
    </header>
    <ul>
        {#each items as item (item._id)}
          <Item item={item} />
          <br>
      {/each}
    </ul>

    <header>
        <h1>Create Shipment</h1>
        <p>Please do not change names</p>
        <ul>
        {#each items as item (item._id)}
        <li>
            <input type=text value="{item.name}">
        </li>
        <input type=number placeholder=0 bind:value="{newCount}">
          <br>
        {/each}
        </ul>
    </header>
    <form on:submit|preventDefault={handleShipment}>
    <td><button type='submit' >Send Shipment</button></td>
    </form>

</div>