import mongoose from 'mongoose'
import React from 'react'
import ConnectToDb from '@/utils/db';
import MyModel from '@/models/product';

const handler = async (req, res) => {

    let { title, price, category, description, ram, cpu } = req.body

    console.log(title, price, category, ram, cpu)
    switch (req.method) {
        case "POST": {
            let product = await MyModel.create({ title, price, category, description, ram, cpu })
            res.json({ message: title, price, category, description, ram, cpu  })
            console.log(product)


        }
        case "GET": {
            res.json({ message: "GET METHOD" })
        }
    }


    ConnectToDb()


    res.json({ message: 'successfully registered' })
}
export default handler;