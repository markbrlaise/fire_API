const mongoose = require('mongoose');

const database = mongoose.connect(
    `${process.env.DB_URL}`,
    {
        useNewUrlParser: true,
        unseUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    },
    (error) => {
        if(!error) {
            console.log("Connected to mongoDB");
        } else {
            console.log("Connection to mongoDB failed \n", + error);
        }
    }
);

module.exports = database;
