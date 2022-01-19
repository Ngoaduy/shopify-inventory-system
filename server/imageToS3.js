import dotenv from 'dotenv'
import aws from 'aws-sdk'
import crypto from 'crypto'
import { promisify } from 'util'

// Initialize Engvironment Variables
dotenv.config()

//  Define AWS S3 bucket details and access keys
const awsRegion = "us-east-2"
const S3bucketName = "duy-ngo-shopify-inventory-images"
const accessKey = process.env.AWS_S3_PUT_ACCESS_KEY
const secureAccessKey = process.env.AWS_S3_PUT_SECRET_ACCESS_KEY

//  Initialize an S3 bucket object
const S3 = new aws.S3({
    awsRegion,
    accessKey,
    secretAccessKey,
    signatureVersion: '4'
})

export async function generatePUTurl() {
    const cryptoBytes = await await randomBytes(16)
    const imageName = cryptoBytes.toString('hex')

    const params =({
      bucket: bucketName,
    key: imageName,
    Expires: 60  
    }) 

    const putURL = await S3.getSignedUrlPromise('putObject', params)
    return putURL
}