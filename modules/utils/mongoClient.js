const {MongoClient} = require('mongodb');
const databases = global.services('databases');
const options = {
    native_parser:true,
    userNewUrlParser:true
};
function connectdb(resDb){
    return new Promise((resolve,reject)=>{
        const dbOptions =databases[resDb];
        MongoClient.connect('mongodb+srv://admin:1234@localdb-eemjv.mongodb.net/test?retryWrites=true&w=majority',options,(err,client)=>{
            if(err){
                logger.error(err);
                reject({message:'UNKNOWN'});
            }else{
                resolve(client);
            }
        })
    })
}
module.exports = connectdb;