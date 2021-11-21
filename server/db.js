const mongoose = require('mongoose');
// const mongoURI = "mongodb://localhost:27017/TypeIt?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
//const mongoURI = process.env.REACT_APP_MONGO_URI;
const mongoURI = "mongodb+srv://HimanshuAtlas:KVguJCcuxPF2Mcn@cluster0.eehl6.mongodb.net/TypeIt?retryWrites=true&w=majority";

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connect To Mongo");
    })
}

module.exports = connectToMongo;