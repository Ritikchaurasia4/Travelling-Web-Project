const express = require("express");
const app = express();

const mongoose = require("mongoose");

// rquire The model
const place = require("./models/place");

main().then(()=>{
    console.log("Connected to DB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Hotel');

}

app.get("/demo" , async(req , res)=>{
    let samplePlace = new place({
        title : "My New Hotel" ,
        description : "Its very awesome ",
        price : 1200,
        location:"Goa",
        country:"India",

    })
    await samplePlace.save();
    console.log("sample was saved");
    res.send("Success testing");
})

app.get("/" , (req , res)=>{
    res.send("Hii , I am Root");
})

app.listen(8090, ()=>{
    console.log("This server is running on port 8090");
})