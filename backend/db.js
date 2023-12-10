const mongoose = require('mongoose')
const mongoURI = 'mongodb://localhost:27017/Medishop'
module.exports = function (callback) {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) 
        console.log(err)
        else {
            console.log("connected with database");
            // const users = await mongoose.connection.db.collection("users");
            // console.log(users);
            const medCollection = await mongoose.connection.db.collection("med_items");
            // console.log(medCollection);
            medCollection.find({}).toArray(async function (err, data) {
                const categoryCollection = await mongoose.connection.db.collection("Categories");
                categoryCollection.find({}).toArray(async function (err, Catdata) {
                    callback(err, data, Catdata);
                    // global.medData = medCollection;
                    // global.medcategory = categoryCollection;
                })
            });
        }
    })
};
