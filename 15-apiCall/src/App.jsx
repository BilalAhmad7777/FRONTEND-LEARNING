import React from 'react'
import axios from 'axios'
const App = () => {

  // async function getData(){
  //   const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
      
  //    console.log(response)
  // // 

  // const getData = async ()=>{
  //   const response=await fetch('https://jsonplaceholder.typicode.com/todos')
  //   const data=await response.json()
  //   console.log(response)
  //   console.log(data)
  // }

  // fetch using axios
  const getData = async () =>{
  const {data}=await axios.get('https://jsonplaceholder.typicode.com/todos')
  console.log(data)

}


  return (
    <div>
      <button onClick={getData}>GET</button>
    </div>
  )
}

export default App
