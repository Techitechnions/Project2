### Hi Everyone, I am Abhavya. Subscribe to my YouTube channel TechiTechnions 👋

[![Website](https://img.shields.io/youtube/channel/views/UCErO8_3_7-OL0RU5dFyxAnA?style=social)](https://www.youtube.com/channel/UCErO8_3_7-OL0RU5dFyxAnA/videos)


### Connect with me:

[<img align="left" alt="codeSTACKr | YouTube" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/youtube.svg" />][youtube]
<br />
[<img align="left" alt="codeSTACKr | LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />][linkedin]


<br />

### Languages and Tools:

1. Webpage :- USing Html and CSS
2. Server :- Nodejs Server
3. DAtabase:- PostgreSQL
4. Editor:- Vs Code Editor
<br />
<br />

---

### YouTube Videos Playlists

<!-- YOUTUBE:START -->
- [DockerFile](https://www.youtube.com/watch?v=wOdrRlz-gQo&list=PLHOC8WGBZWa1zUT2ipvz2woO55TNPahr4)
- [Docker-Containers](https://www.youtube.com/watch?v=ulAxgTN9fp0&list=PLHOC8WGBZWa2V3VIna0K-pr9UIhktngD6)
- [Docker Image CLI Commands](https://www.youtube.com/watch?v=ntBCU7cZJ1I&list=PLHOC8WGBZWa3rIHGj444KeRD920Oimsdv)
<!-- YOUTUBE:END -->

---
# HTML Code

<br />

```html
<!DOCTYPE html>
<html>
    <head>
        <title>
            Registration Form
        </title>
        <link rel="stylesheet" type="text/css" href="/form/style.css">
        
    </head>


    <body>
        <img class="im" src="/form/login.png">
        <div class="rform"><h1> Registration Form</h1></div>
        <div class="sec2">
            <form>
                <div id="name">
                    <h2 class="name">Name</h2>  
                    <input class="fname" type="text" name="f_name"><br>
                    <h2 class="name">Mail Id</h2>
                    <input class="mail" type="text" name="mail"><br>
                    <h2 class="name">Phone No.</h2>
                    <input class="phone" type="text" name="phone"><br>

                     <br>   
                    <button type="submit">Register</button>
            </div>  
            </form>
        </div>
    </body>
</html>
```
---
# Server Code Node.js
<br />
Inside index.js

<!-- YOUTUBE:START -->
- Check my YouTube Video for the server [ Express in Node JS](https://www.youtube.com/watch?v=CArrhxAMaTE&t=332s)
<!-- YOUTUBE:END -->



```javascript
const express = require('express')
const app = express();
const port = 8000;


////////////SECTION 1 SENDING ALL THE WEB PAGE FILES STORED IN A DIRECTORY/////////////////////////////

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/form/form.html");
});

//////////////SECTION 2 APP LISTENING ON THE SPECIFIED PORT//////////////////////////////////////////// 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});


//Take care of the location of css and img files

// CSS eg:- "<link rel="stylesheet" type="text/css" href="/form/style.css""
// IMG eg:- "<img class="im" src="/form/login.png""


// The structure of the directories matter a lot. Even if the server code is written correctly then also there may be chance that the page is not completely rendered on the given port.


```

---

# Database Connection Code (PostgresSQL)

<!-- YOUTUBE:START -->
- Check my YouTube Video for the connection [ Node.js How to connect to postgreSQL Database](https://www.youtube.com/watch?v=UY193brxXw8&t=49s)
<!-- YOUTUBE:END -->

 Step 1  Make sure your postgres database is on

 Step 2  Install pg npm i pg

 Step 3  Make a database.js file for the connection


```javascript

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
```




---
[youtube]: https://www.youtube.com/channel/UCErO8_3_7-OL0RU5dFyxAnA/videos
[instagram]: https://instagram.com/codeSTACKr
[linkedin]: https://www.linkedin.com/in/abhavya-verma-8b560b177/
[vscode]: https://www.youtube.com/watch?v=Tf_9uQ901Uo&t=11s

























