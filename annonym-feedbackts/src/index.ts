import express from 'express';
const app = express();
import sqlite3 from 'better-sqlite3';
const db = sqlite3('afeedback.db', {verbose: console.log})

const currentTime = new Date();

let tid = currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function rootRoute(request, response) {
    const sql = db.prepare('SELECT * FROM amessage');
    const info = sql.all();
    response.send(info);
}

app.get('/feedbackrawjson', rootRoute)

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDirectoryPath = path.join(__dirname, "../src")
app.use(express.static(publicDirectoryPath))

console.log("Hellow world!")

function formhandlerfeedback(request, response) {
    console.log(request.body);

    for (let i = 0; i < request.body.jsonform.length; i++) {
        // const qsql = db.prepare('SELECT * FROM amessage')
        // if (request.body.feedback == qsql) {
        //     event.preventDefault();
        //     console.log("you cant enter the same message")
        // } else {
            const msql = db.prepare('INSERT INTO amessage (afeedbackm, atime, aos, aurl) VALUES (?, ?, ?, ?)');
            const info = msql.run(request.body.feedback, tid, request.body.jsonform, request.body.currenturl);
        // }
    }

    response.send("feedback sendt")
}

app.post('/sendmap', formhandlerfeedback);

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
