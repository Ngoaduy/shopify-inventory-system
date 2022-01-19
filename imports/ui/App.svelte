<script>
import { Meteor } from 'meteor/meteor';
import '/imports/api/s3Methods'; 
import { ItemsCollection } from '../api/ItemsCollection'
import ItemForm from './ItemForm.svelte';
import ItemList from './ItemList.svelte';


 
    /*
    Meteor.call('getImageURL', url)
    console.log(url);
    */
    

    

    /*
    {#if files}
        <button on:click={handleSubmit}>Submit</button>
    {:else}
        <button on:click={handleSubmit} disabled>Submit</button>
    {/if}
    
    */
  
</script>

<ItemForm />
<ItemList />
