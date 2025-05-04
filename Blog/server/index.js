const express = require("express");

const app = express();

app.use(express.json())

const array = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
  { id: 4, name: "Item 4" },
  { id: 5, name: "Item 5" },
];
app.get("/", (req, res) => {
  console.log(array)
});

app.post("/add-post", (req, res) => {
  const data = req.body;
  array.push(data);
  console.log(array);
  res.status(200).send("received the post to add");
});

app.get("/view-post/:id", (req, res) => {
    const id=parseInt(req.params.id)
    console.log(id)
    // console.log(array)
    const item=array.find(item => item.id === id)
    console.log(item)
    if(!item) return res.status(404).send('Itemnot found')
    res.send("viewing the post");
});

app.put("/update-post/:id", (req, res) => {
    const id=parseInt(req.params.id);
    const item = array.find((item) => item.id === id);
    if(!item) res.status(404).send("items not found");
     item.name=req.body.name
    console.log(item)
    console.log(array)
    res.send("Item updated successfully")

});

app.delete("/delete/:id", (req, res) => {
   const id = parseInt(req.params.id);
   const itemIndex = array.findIndex((item) => item.id === id);
   console.log(itemIndex)
   if(itemIndex===-1) return res.status(404)
   array.splice(itemIndex,1)
   console.log(array)
   
});

app.listen(5656, () => console.log("listening on port 5656"));
