const express=require('express')
const fs=require('fs')

const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    fs.readdir(`.\\files`,(err,files)=>{

        res.render('index',{files:files});
    })
})
app.post('/create',(req,res)=>{
    console.log(req.body)
    fs.writeFile(`.\\files\\${req.body.email}`,JSON.stringify(req.body),(err)=>{
        if(err) console.log(err);
        else console.log('done')
    })
    res.redirect('/')
})
app.get('/files/:name',(req,res)=>{
    console.log(req.params.name)
    fs.readFile(`.\\files\\${req.params.name}`,'utf-8',(err,filedata)=>{
        res.render("show", {
          filename: req.params.name,
          filedata: JSON.parse(filedata),
        });
        console.log(filedata)
    })
})

// app.post('/profiles',(req,res)=>{

//     res.send('profiles')
// })


app.listen(5656,()=>{
    console.log('listening on port 5656')
})