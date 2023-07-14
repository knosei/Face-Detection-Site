import React from 'react'
import './index.css'
import UploadContainer from './UploadContainer'


const App = () => (
  <div className='flex border border-blue-400 h-[500px] justify-between font-family:Jost mt-[40px]'>
    <div className='flex justify-center items-center flex-col borde border-blue-400 w-[900px]  '>
      <h1 className='text-6xl font-bold underline decoration-yellow-300 decoration-[15px]'>Face Detection Engine</h1>
      <p className='text-2xl mt-[50px]'>UPLOAD PHOTO AND DETECT FACES IN AN IMAGE </p>
      {/* <div className='flex rounded-full border border-black mt-[40px] w-[500px] h-[50px] justify-around ' input='file'>
        <p className='text-md mt-[10px] font-weight'>Upload a Photo</p>
        <img src='./camera.png' width='35px' height='25px' />
      </div> */}
      <UploadContainer />
    </div>
    <div className='flex borde border-blue-400'>
      <img src='./facemesh.png' width='350px' height='00px' />
    </div>
  </div>

)

export default App