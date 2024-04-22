import express from 'express';
const app = express();
import sqlite3 from 'better-sqlite3';
const db = sqlite3('afeedback.db', {verbose: console.log})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function rootRoute(request, response) {
    const sql = db.prepare('SELECT * FROM amessage');
    const info = sql.all();
    response.send(info);
}

app.get('/feedbackjson', rootRoute)

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDirectoryPath = path.join(__dirname, "../src")
app.use(express.static(publicDirectoryPath))

console.log("Hellow world!")

function formhandlermelding(request, response) {
    console.log(request.body);
    const msql = db.prepare('INSERT INTO amessage (afeedbackm) VALUES (?)');
    const info = msql.run(request.body.tilbakemelding);

    response.send("feedback sendt")
}

app.post('/feedbackm', formhandlermelding);

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})