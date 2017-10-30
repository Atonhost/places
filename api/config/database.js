const mongose = require('mongoose');

const dbName='places_db'

module.exports={
    connect: ()=> mongose.connect('mongodb://localhost/'+dbName),
    dbName:dbName,
    connection:()=>{
        if (mongose.connection) 
            return mongose.connection;
        return this.connection;
    }
}