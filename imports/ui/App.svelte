<script>
import { Meteor } from 'meteor/meteor';
import '/imports/api/s3Methods'; 
import { ItemsCollection } from '../api/ItemsCollection'
import ItemForm from './ItemForm.svelte';
import ItemList from './ItemList.svelte';
  
</script>

<ItemForm />
<ItemList />
