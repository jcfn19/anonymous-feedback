import 'vite/modulepreload-polyfill'
import express, { Express, Request, Response } from 'express';
import sqlite3, { Database } from 'better-sqlite3';

const app: Express = express();
const db: Database = sqlite3('afeedback.db', { verbose: console.log });

console.log("Hello World!");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function rootRoute(_request: Request, response: Response): any {
    const sql = db.prepare('SELECT * FROM feedback');
    const info = sql.all();
    response.send(info);
}

app.get('/feedback', rootRoute);

import path from 'path';
// import bodyParser from 'body-parser';
const publicDirectoryPath = path.join(__dirname, "./src");
app.use(express.static(publicDirectoryPath));
// app.use(bodyParser.json());

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function formhandlermelding(request: Request, response: Response): any {
    console.log(request.body);
    const msql = db.prepare('INSERT INTO feedback (afmelding) VALUES (?)');
    msql.run(request.body.tilbakemelding);

    response.send("feedback sendt");
}

app.post('/ftmelding', formhandlermelding);

// app.listen(3000, () => {
//     console.log('Server is up on port 3000');
// });

// module.exports = app