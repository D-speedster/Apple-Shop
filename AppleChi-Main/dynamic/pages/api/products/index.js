import MyModel from "@/models/Product";
import ConnectToDb from "@/utils/db";
import mongoose from "mongoose";


export default function Products(req, res) {
    ConnectToDb();
    switch (req.method) {
        case "GET": {
            res.status(200).json({ message: 'Coming Soon ...' });
        }
        case "POST": {
            const { username, password } = req.body;
            console.log(req.body)
            console.log(username)
            res.status(200).json({ message: `Welcome ${username} to our site` });
        }
    }

}