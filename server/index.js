import express from 'express'
import connectionDB from './api/db/index.js';
import { createProxyMiddleware } from 'http-proxy-middleware';
// import 'dotenv/config'

const app = express();
// app.use(express.json())

connectionDB().then(()=>{
    console.log("DB connected successfully")
})

app.post('/v1/api/user/register', (req, resp)=> {
    console.log("Application route called")
    resp.status(201).json({
        message: 'Thing created successfully!'
      });
})

app.get('/', (req, resp)=>{
    resp.send('<p>some html</p>')
})

app.listen(process.env.PORT, ()=>{
    console.log(process.env.PORT)
    console.log("Application running on port 3000")
})