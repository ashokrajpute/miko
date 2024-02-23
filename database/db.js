import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const Connection=()=>{
    const DB_URI=process.env.DB_URI
    try{
        mongoose.connect(DB_URI,{})
        console.log('Database connected successfully')
    }catch(error){
         console.log('Error while connecting with the database', error.message)
    }
}

export default Connection;