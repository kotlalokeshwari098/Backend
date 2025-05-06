import express from "express";

const route=express.Router();

route.get('/register',(req,res)=>{
    res.send('register route hit!')
      console.log('auth/register')
})


export default route;
