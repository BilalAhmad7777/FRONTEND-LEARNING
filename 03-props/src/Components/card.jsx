import React from 'react'

const card = (props) => {
    console.log(props);
  return (
    <div className="card">
        <img src="https://plus.unsplash.com/premium_photo-1750892163390-92a47a2a86bd?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>
  )
}

export default card
