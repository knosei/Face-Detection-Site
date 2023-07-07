import React from 'react'
import './index.css'


const App = () => (
  <div className='flex borde border-blue-400 h-[500px] justify-between font-family:Jost'>
    <div className='borde border-blue-400 w-[900px] text-center self-center'>
      <h1 className='text-6xl font-bold underline decoration-yellow-300 decoration-[15px]'>Face Detection Engine</h1>
      <p className='text-2xl mt-[50px]'>UPLOAD PHOTO AND DETECT FACES </p>
    </div>
    <div className='flex borde border-blue-400'>
      <img src='./facemesh.png' width='350px' height='00px' />
    </div>
  </div>

)

export default App