<script>
    export let item;

let newItem = {
    name: "",
    count: 0
}

function handleDelete(item) {
    Meteor.call('items.remove', item)
}

const handleSubmit = () => {
    console.log('Edit Clicked')
    Meteor.call('items.edit', [item, newItem])
}


</script>

<li>
    <input type=text value="{item.name}">
</li>
<li>
    <input type=number value="{item.count}">
</li>
<form on:submit|preventDefault={handleSubmit}>
<input type=text placeholder="enter a new name" bind:value="{newItem.name}">
<input type=number placeholder=0 bind:value="{newItem.count}">
<td><button type='submit' >Submit Edit</button></td>
</form>
<td><button type='button' on:click={() => handleDelete(item)}>Delete</button></td>



