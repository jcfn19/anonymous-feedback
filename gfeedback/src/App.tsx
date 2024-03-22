import './App.css'
// import sqlite3 from 'better-sqlite3';
// const db = sqlite3('gfeedback.db', {verbose: console.log})

// function rootRoute(_request, response) {
//   const sql = db.prepare('SELECT * FROM gfmelding');
//   const info = sql.all();
//   response.send(info);
// }

function App() {

  return (
    <>
     <input type="text" name="" id="" placeholder='tilbakemelding'/>
     <button type="submit">send</button>
    </>
  )
}

export default App
