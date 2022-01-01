const mongodb = require('mongodb');
const dotenv = require('dotenv').config();
const mongodbClient = mongodb.MongoClient;

const connectDB = async () => {
try {
    const client = await mongodbClient.connect(process.env.database,{
        useNewUrlParser: true,
        useUnifiedTopology:true,
        tls:true,
        tlsCAFile:"./server/cer/ca-certificate.crt",


    });
    console.log('MongoDB Connected...');
} catch (error) {
    console.error(error.message);
    process.exit(1);
    
};

};

module.exports = connectDB;