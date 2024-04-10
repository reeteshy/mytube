import express from 'express'
// import 'dotenv/config'

const app = express();

app.get('/', (req, resp)=>{
    resp.send('<p>some html</p>')
})

app.listen(process.env.PORT, ()=>{
    console.log(process.env.PORT)
    console.log("Application running on port 3000")
})