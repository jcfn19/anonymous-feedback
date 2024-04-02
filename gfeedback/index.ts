import express from 'express';
import sqlite3 from 'better-sqlite3';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = sqlite3('gfeedback.db', {verbose: console.log})

function rootRoute(_request: unknown, response: { send: (arg0: unknown[]) => void; }) {
  const sql = db.prepare('SELECT * FROM gfmelding');
  const info = sql.all();
  response.send(info);
}

app.get('/gfmelding', rootRoute)

app.listen(3000, () => {
  console.log('Server is up on port 3000')
}) 