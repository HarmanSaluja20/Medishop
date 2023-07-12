const mongoose = require('mongoose');
const databsaseurl = 'mongodb://saluja2002:saluja2002@ac-zmaqlb2-shard-00-00.whlgpru.mongodb.net:27017,ac-zmaqlb2-shard-00-01.whlgpru.mongodb.net:27017,ac-zmaqlb2-shard-00-02.whlgpru.mongodb.net:27017/medishop?ssl=true&replicaSet=atlas-tc3sxe-shard-0&authSource=admin&retryWrites=true&w=majority'
const mongoo =async()=>{
await mongoose.connect(databsaseurl,{ useNewUrlParser: true },async(err,result)=>{
    if(err)
    console.log("err");
    else
    {
        console.log("CONNECTED");
        const got_data = await mongoose.connection.db.collection("users");
        got_data.find({}).toArray(function (err,data){
            if(err)
            console.log("err");
            else
            console.log(data);
        })
    }
});
}

module.exports = mongoo;
