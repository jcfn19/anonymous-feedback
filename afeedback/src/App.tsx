import './App.css'

function App() {

  return (
    <>
    {/* <iframe name="dummyframe" id="dummyframe"></iframe> */}

    <form action="/ftmelding" method="post">{/* target='dummyframe' */}
     <input type="text" name="tilbakemelding" id="" placeholder='tilbakemelding'/>
     <button type="submit">send</button>
    </form>
    </>
  )
}

export default App
