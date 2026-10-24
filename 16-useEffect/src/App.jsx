import React, { useEffect, useState } from 'react'

const App = () => {


// (1) Galat method
// function random(){
//   const a=Math.random();
//   console.log(a)
// }
// random()


// 2--> useEffect Method


const [num, setnum] = useState(0)
useEffect(function(){
  console.log('use effect is running.....')
},[])



  return (
    <div>
      <h1>{num}</h1>
      <button onClick={()=>{
        setnum(10);
      }
      }>click</button>
    </div>
  )
}

export default App
