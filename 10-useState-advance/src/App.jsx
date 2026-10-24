import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState({user:'Sarthak',age:20})

const btnClicked =()=>{
  const newNum={...num};
  newNum.user='aman'
  setNum(newNum);
}
  return (
    <div>
      <h1>{num.user} , {num.age}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
