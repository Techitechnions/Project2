// Step 1  MAke sure your postgres database is on

// Install pg npm i pg

//Connection code

const {Pool,Client}= require('pg')


const connectionString='postgressql://username:password@localhost:5432/databasename'


//Creating Client
const client= new Client({
    connectionString:connectionString
})




////////////////////////////////////////// PSQL Query//////////////////////////////



//Select query
// client.connect()
// client.query('Select * from public."Stud"',(err,res)=> {
//     console.log(err,res)
//     //client.end()
// })


// Select Query. Check the structure of your table as shown in the video
//client.connect()
// client.query('Select * from Form',(err,res)=> {
//     console.log(err,res)
//     //client.end()
// })


// Insertion Query. Check the structure of your table as shown in the video
client.connect()
const qr="Insert into Form Values('Name','mail',6712)";
client.query(qr,(err,res)=> {
    console.log(err,res)
    client.end()
})
