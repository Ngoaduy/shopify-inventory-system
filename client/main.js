import { Meteor } from 'meteor/meteor';
import App from '../imports/ui/App.svelte';

const imageForm = document.querySelector('#imageForm')
const imageInput = document.querySelector('#imageInput')

Meteor.startup(() => {
  new App({
    target: document.getElementById('app')
  });

  imageForm.addEventListener('submit', async (event) =>{
    event.preventDefault()
    const file = imageInput.files[0];

    //  Retrieve a secure URL from server
    const { url } = await fetch("s3-image-url").then(res => res.json())
    //  post to s3 bucket

    //  Store other data to server
  })
  
});