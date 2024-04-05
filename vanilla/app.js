// her er en "vanilla" version ut av coden altså bruker ikke ts eller react bare express og sqlite3
const express = require('express');
const app = express();
const sqlite3 = require('better-sqlite3');
const db = sqlite3('feedbackv.db', {verbose: console.log})
const currentTime = new Date();

// console.log("currentTime: " + currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds());
let tid = currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();
// console.log("Hello World!");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function rootRoute(request, response) {
    const sql = db.prepare('SELECT * FROM fmelding');
    const info = sql.all();
    response.send(info);
}

app.get('/fmelding', rootRoute)

const path = require('path');
const publicDirectoryPath = path.join(__dirname, "./static")
app.use(express.static(publicDirectoryPath))

function formhandlermelding(request, response) {
    console.log(request.body);
    const msql = db.prepare('INSERT INTO fmelding (message, time) VALUES (?, ?)');
    console.log(window.location.href)
    const info = msql.run(request.body.tilbakemelding, tid);//document.referrer/window.location.href for url

    response.send("feedback sendt")
}

app.post('/ftmelding', formhandlermelding);

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
