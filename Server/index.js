import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.json({ limit :'30mb' ,extended : true}));
app.use(bodyParser.urlencoded({ limit :'30mb' ,extended : true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://akshaychavhan:akshaychavhan123@cluster0.rjfftsb.mongodb.net/?retryWrites=true&w=majority';

// https://www.mongodb.com/cloud/atlas/register

const PORT = process.env.PORT || 5000 ;

mongoose.connect(CONNECTION_URL,{ useNewUrlParser : true , useUnifiedTypology : true})
.then(()=> app.listen(PORT,()=> console.log(`Server runnning on PORT number ${PORT}`)))
.catch((error)=> console.log(error.message));

// mongoose.set('useFindAndModify',false);


