<script>
  let counter = 0;
  const addToCounter = () => {
    counter += 1;
  }
</script>


<div class="container">
  <h1>Current Inventory</h1>
  

  <button on:click={addToCounter}>Click Me</button>
  <p>You've pressed the button {counter} times.</p>

  <form id= "imageForm">
    <input id="imageInput" type="file" accept="image/*">
    <button type="submit">Upload</button>
  </form>

  <ul>
    
  </ul>
</div>
