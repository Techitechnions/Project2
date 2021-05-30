// Step 1  MAke sure your postgres database is on

// Install pg npm i pg

//Connection code

const {Pool,Client}= require('pg')


//const connectionString='postgressql://username:password@localhost:5432/databasename'


//Creating Client
const client= new Client({
    connectionString:connectionString
})

client.connect()
client.query('Select * from public."Stud"',(err,res)=> {
    console.log(err,res)
    client.end()
})
