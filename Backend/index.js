import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

//database connection
mongoose.connect("mongodb+srv://meshsami27:wamichwe01@cluster0.v3btrzr.mongodb.net/?retryWrites=true&w=majority");
mongoose.set("strictQuery", false);
mongoose.set('bufferCommands', false);


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB database connected");

    } catch (error) {
        console.log("MongoDB database not connected. Try again"); 
    }

    mongoose.connection.on('error', err => {
        console.log(err);
      });
    
};

//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.listen(port, ()=>{
    connect();
    console.log('server listening on the port', port)
});