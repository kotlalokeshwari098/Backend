import { Pool } from "pg";
import express from "express";

const con = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "openliki09",
  database: "demo",
});
const app = express();
app.use(express.json());
con.connect().then(() => console.log("connected"));

app.post("/postData", (req, res) => {
  const { age, id } = req.body;

  const insert_query = `INSERT INTO demo (age,id) VALUES ($1,$2)`;
  con.query(insert_query, [age, id], (err, result) => {
    if (err) {
      res.send(err.message);
      console.log(err.message);
    } else {
      res.send("posted data");
      console.log(result);
    }
  });
});
app.get("/fetchs/:id", (req, res) => {
  const id = req.params.id;
  const get_query = "SELECT * FROM demo WHERE id = $1";
  con.query(get_query, [id], (err, result) => {
    if (err) {
      res.send(err.message);
      console.log(err.message);
    } else {
      res.send(result.rows[0]);
    }
  });
});
app.put('/update/:id',(req,res)=>{
  console.log(req);
  const id=req.params.id;
  const age=req.body.age;
  const update_age=`UPDATE demo SET age =$1 WHERE id =$2`
  con.query(update_age,[age,id],(err,result)=>{
      if(err){
        res.send(err.message)
      }
      else{
        res.send('done')
      }
  })
})
app.delete('/delete/:id',(req,res)=>{
  console.log(req);
  const id=req.params.id;
  const delete_age=`DELETE FROM demo WHERE id=$1`
  con.query(delete_age,[id],(err,result)=>{
      if(err){
        res.send(err.message)
        console.log(err.message)
      }
      else{
        res.send('done')
      }
  })
})


app.get("/", (req, res) => {
  const get_query = `SELECT * FROM demo`;
  con.query(get_query, (err, result) => {
    if (err) {
      res.send(err.message);
      console.log(err.message);
    } else {
      res.send("posted data");
      console.log(result);
    }
  });
});

app.listen(5656, () => console.log("listening on port 5656"));
