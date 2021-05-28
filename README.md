Server Code

const express = require('express')
const app = express();
const port = 8000;



app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/form/form.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});


Take care of the location of css and img files

CSS eg:- "<link rel="stylesheet" type="text/css" href="/form/style.css""
IMG eg:- "<img class="im" src="/form/login.png""


The structure of the directories matter a lot. Even if the server code is written correctly then also there may be chance that the page is not completely rendered on the given port.



