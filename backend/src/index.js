import express from 'express'
import http from 'http'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import path from 'path'

import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import {connectDB} from './lib/db.js'
import { socketConnection } from './lib/socket.js'
dotenv.config();
const app = express();
const PORT =    process.env.PORT || 5002
const __dirname = path.resolve();
const server = http.createServer(app);
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials:true,
  })
);

socketConnection(server);
console.log(socketConnection)
app.use('/api/auth',authRoutes);
app.use('/api/messages', messageRoutes);

if(process.env.NODE_ENV === "production")
{
  app.use(express.static(path.join(__dirname,'../frontend/dist')))

  app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname, '../frontend', "dist" , "index.html"));
  })
}


server.listen(PORT,()=>{
    console.log("Server is listening on : ", PORT);
    connectDB();
})