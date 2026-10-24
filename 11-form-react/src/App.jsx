import React from 'react'

const App = () => {

  const handle=(e)=>{
    e.preventDefault();
    console.log("Form Submitted")
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        handle(e)
      }}>
        <input type="text" placeholder='enter name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
