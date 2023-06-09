const mongoose = require('mongoose')

const connectdb = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`database connected ${conn.connection.host}
        `);
    }
    catch(error){
        console.log(error.message);
        process.exit(1)
    }
}

module.exports = connectdb