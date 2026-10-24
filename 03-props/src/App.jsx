import React from 'react'
import Card from './Components/card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Bilal' age={21} img="" />
      <Card user='Al' age={22} />
      
    </div>
  )
}

export default App
