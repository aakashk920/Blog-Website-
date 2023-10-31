import mongoose from 'mongoose'

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-o5hrxi6-shard-00-00.c6f77dm.mongodb.net:27017,ac-o5hrxi6-shard-00-01.c6f77dm.mongodb.net:27017,ac-o5hrxi6-shard-00-02.c6f77dm.mongodb.net:27017/?ssl=true&replicaSet=atlas-k25k96-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log("Databse connnected succesfully");
    } catch (error) {
        console.log('Error while connecting with the data', error);
    }
}
export default Connection;