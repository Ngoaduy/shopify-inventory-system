import { Meteor } from 'meteor/meteor';
import express from 'express';
import imageToS3 from './imageToS3'

const app = express();

Meteor.startup(() => {
  // code to run on server at startup
    
  app.use(express.static('front'))

  app.get('s3-image-url', (req, res) => {
    const url = imageToS3.generatePUTurl()
    res.send({url})

    app.listen(8080, () => console.log("Listening for request on port 8080"))
  })
});
