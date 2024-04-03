import './App.css'

function App() {

  return (
    <>
    <form action="/ftmelding" method="post">
     <input type="text" name="tilbakemelding" id="" placeholder='tilbakemelding'/>
     <button type="submit">send</button>
    </form>
    </>
  )
}

export default App
