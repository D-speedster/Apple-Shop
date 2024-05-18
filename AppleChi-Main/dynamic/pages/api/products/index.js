import MyModel from "@/models/Product";
import ConnectToDb from "@/utils/db";
const { default: mongoose } = require("mongoose");

export default async function Products(req, res) {
    ConnectToDb()
    switch (req.method) {

        case "POST": {
            const { title, body_structure, cpu, ram, Camera, Storage, Display, resolution, NetWorks, Filming, battery, Other_Details, IMG, Gallery , type , price } = req.body;
            await MyModel.create({ title, body_structure, cpu, ram, Camera, Storage, Display, resolution, NetWorks, Filming, battery, Other_Details, IMG, Gallery , type , price  });
            res.json({ message: "successfully submitted " })

        }
        case "GET": {
            let data = await MyModel.find({})
            res.json({ data })
        }
    }
    console.log(req.method)

}