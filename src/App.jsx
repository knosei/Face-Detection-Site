import React from 'react'
import './index.css'


const App = () => (
  <div className='flex border border-blue-400 h-[500px] justify-between font-family:Jost'>
    <div className='justify-center grid justify-items-center border border-blue-400 w-[900px]  '>
      <h1 className='text-6xl font-bold underline decoration-yellow-300 decoration-[15px]'>Face Detection Engine</h1>
      <p className='text-2xl mt-[0px]'>UPLOAD PHOTO AND DETECT FACES </p>
      <div className='flex rounded-full border border-black mt-[0px] w-[600px] h-[60px] justify-around '>
        <p className='text-lg'>Upload a Photo</p>
        <img src='./camera.png' width='50px' height='50px' />
      </div>
    </div>
    <div className='flex border border-blue-400'>
      <img src='./facemesh.png' width='350px' height='00px' />
    </div>
  </div>

)

export default App