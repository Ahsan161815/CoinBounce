const mongoose = require('mongoose');
const {CONNECTION_STRING} = require('../config/config');
const connection = async () => {
    try{
        const db = await mongoose.connect(CONNECTION_STRING, {
            
        });
        console.log('Database connected', db.connection.host);
    }catch (e){
        console.log(e);
    }
}

module.exports = connection

