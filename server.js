
////////////////////////////Step 1 Rendering your html page////////////////////////////////////////////

const express=require('express');
const app=express();
const port= 9000;

const bodyParser=require('body-parser'); 



app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/form/form.html");
});


app.use(bodyParser.urlencoded({extended: false}))
app.get('/submit',function(req,res){
  console.log("Data Saved");
})

////////////////////////////Step 2 Connection with Postgres////////////////////////////////////////////

const {Pool,Client}= require('pg');

const connectionString='postgressql://username:password@localhost:5432/databasename'


const client= new Client({
    connectionString:connectionString
})


////////////////////////////Step 3  Inserting the values////////////////////////////////////////////

app.post("/",(req,res)=>{
    const { f_name,mail,phone}=req.body
    client.connect()
    client.query('INSERT INTO Form VALUES ($1, $2, $3)', [f_name, mail,phone], (err,res)=> {
        console.log(err,res);
        client.end() 
        //alert("Data Saved");
        

    })
   
    res.sendFile(__dirname + "/form/form.html");
  })



  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
  });
