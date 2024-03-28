import React from 'react'

export default function index(req, res) {
    console.log(req.body)
    let { code } = req.body
    res.json({ message: 'successfully registered' })
    const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
    require("dotenv").config();

    const client = new S3Client({
        region: "default",
        endpoint: process.env.LIARA_ENDPOINT,
        credentials: {
            accessKeyId: process.env.LIARA_ACCESS_KEY,
            secretAccessKey: process.env.LIARA_SECRET_KEY
        },
    });

    const params = {
        Body: code,
        Bucket: process.env.LIARA_BUCKET_NAME,
        Key: "25533.jpeg"
    };

    // async/await
    async function TEST() {
        try {
            await client.send(new PutObjectCommand(params));
        } catch (error) {
            console.log(error);
        }
    }

    // callback
    client.send(new PutObjectCommand(params), (error, data) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Ol " , data);
        }
    });
}
