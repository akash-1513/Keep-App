const mongoose = require('mongoose');

const connectToMongo = () => {
    mongoose.connect("mongodb://localhost:27017/keeperDB", (err) => {
        if(err) console.log(err);
        else console.log("Connected to mongoDB sucessfully");
    })
}

module.exports = connectToMongo;
