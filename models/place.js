const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/testapp2");

const placeSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:{
        type:String,
        default:"https://unsplash.com/photos/a-large-white-building-surrounded-by-palm-trees-TfmDRQagnCQ",
        set:(v)=>v===""?"https://unsplash.com/photos/a-large-white-building-surrounded-by-palm-trees-TfmDRQagnCQ":v,
    },
    price:Number,
    location:String,
    country:String,
});

module.exports = mongoose.model("Place" , placeSchema);

