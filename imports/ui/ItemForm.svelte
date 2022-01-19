<script>
import { Meteor } from 'meteor/meteor';
//import '/imports/api/s3Methods'; 
import { ItemsCollection } from '../api/ItemsCollection'

let files;

  let description;
  let count;

  let newItem = {
      name: "",
      count: 0
    }
  
  //  Get request to get URL for image



  const handleSubmit = async () => {
    let item = {
      name: newItem.name,
      count: newItem.count
    }
    Meteor.call('items.insert', item)
  }
    

</script>

<div class="container">
    <h1>Add an Item</h1>
    <form class="task-form">
      <p>Name</p>
      <input type=text name="itemName" placeholder="Item Name" bind:value={newItem.name} />
      <p>Number</p>
      <input type=number name="itemCount" placeholder="Number of Items" bind:value={newItem.count}/>
      <p>Image (optional)</p>
      <input id="fileUpload" type=file accept=".jpg, .jpeg, .png" bind:files>
      <br>
      <button on:click={handleSubmit}>Submit</button>
    </form>
  </div>