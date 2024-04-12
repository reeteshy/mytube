import express from 'express'
import connectionDB from './api/db/index.js';
import bodyParser from 'body-parser'
// import {userControllder} from './api/controllers/userController.js';
// import 'dotenv/config'
import userRouter from './api/routes/user.js'

const app = express();

app.use(express.json())
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );

connectionDB().then(()=>{
    console.log("DB connected successfully")
})

app.use('/v1/api/user', userRouter)

app.get('/', (req, resp)=>{
    resp.send('<p>some html</p>')
})

app.listen(process.env.PORT, ()=>{
    console.log(process.env.PORT)
    console.log("Application running on port 3000")
})