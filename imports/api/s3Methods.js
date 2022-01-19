import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import dotenv from 'dotenv';
import aws from 'aws-sdk';
import crypto from 'crypto';
import { promisify } from 'util';

dotenv.config;


// Initialize Engvironment Variables


//  Define AWS S3 bucket details and access keys
const awsRegion = "us-east-2"
const S3bucketName = "duy-ngo-shopify-inventory-images"
const accessKey = 'AKIA237WFNJ2OKFRQYWQ'
const secretAccessKey = process.env.AWS_S3_PUT_SECRET_ACCESS_KEY


//  Initialize an S3 bucket object
const S3 = new aws.S3({
    awsRegion,
    accessKey,
    secretAccessKey,
    signatureVersion: 'v4'
})

Meteor.methods({
    'getImageURL' (){
        console.log("GET request successful")
        console.log("Access Key " + process.env.AWS_S3_PUT_ACCESS_KEY);
        //cryptoBytes = randomBytes(16)
        const imageName = 'test'
    
        const params =({
        Bucket: S3bucketName,
        Key: imageName,
        Expires: 60  
        }) 
    
        console.log("Access Key " + accessKey)
    
        const putURL = S3.getSignedUrlPromise('putObject', params)
        return putURL
    }
})

/*
export async function generatePUTurl() {
    console.log("GET request successful")
    cryptoBytes = await randomBytes(16)
    const imageName = cryptoBytes.toString('hex')

    const params =({
    bucket: S3bucketName,
    key: imageName,
    Expires: 60  
    }) 

    console.log("GET request successful")

    const putURL = await S3.getSignedUrlPromise('putObject', params)
    return putURL
}*/