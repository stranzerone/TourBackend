import express, { Router } from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Connections from './database/Connection.js';
import  Routes  from './Routes/Routes.js';
const app =express();
app.use(bodyParser.json());
app.use( "*", cors({origin: ["https://tourfrontend-3dea.onrender.com"], credentials: true }));



Connections();


app.use('/',Routes);





app.listen(5000,()=>{
    console.log("server is running on 5000")
})