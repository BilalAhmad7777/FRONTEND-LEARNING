import React from 'react'

const App = () => {

  function btnClicked(){
    console.log("Button is clicked");
  }

  function btnclick2(){
    console.log("Hey")
  }
  return (
    <div>
      <button onClick={btnClicked} onDoubleClick={btnclick2}>Click</button>
      <button onDoubleClick={btnclick2}></button>
    </div>
  )
}

export default App
