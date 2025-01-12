require('dotenv').config();
const mongoose = require('mongoose');
const dbConnect = ()=>{
    mongoose.connect(process.env.DATABSE_URL).then(()=>{
        console.log('Database connected');
    }).catch((err)=>{
        console.log("Database connection error");
        console.log(err.message);
        process.exit(1);
    });
}
module.exports = dbConnect;

// const DB = process.env.DATABASE_URL;

// const dbConnect =  mongoose.connect(DB)
//     .then(() => {
//         console.log('Database connected');
//     })
//     .catch((err) => {
//         console.log("Database connection error");
//         console.log(err.message);
//         process.exit(1);
//     });

// module.exports = mongoose;