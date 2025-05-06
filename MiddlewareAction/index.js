import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import authroute from './routes/authRoutes.js'

const app=express();
const PORT=process.env.PORT || 3000



app.use(express.json())
app.use(express.urlencoded({extended:true}))

const __filename=fileURLToPath(import.meta.url)

const __dirname=dirname(__filename)

app.use(express.static(path.join(__dirname,'public')))

app.use((req,res,next)=>{
    console.log(`${req.method} request to ${req.url}`)
    next();
})
app.use((req,res,next)=>{
    console.log(`current time is ${new Date()}`);
    next();
})

app.get('/',(req,res)=>{
    res.send("Hellooo everyone")
})

app.use('/auth',authroute)

app.listen(PORT,()=>console.log(`listening on port ${PORT}`))