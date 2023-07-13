import React from 'react'

const Header = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white p-4 ">
      <div className="flex items-center">
        <div className="text-white text-lg font-bold">Logo</div>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" className="text-white hover:text-gray-300">Home</a>
        <a href="#" className="text-white hover:text-gray-300">About</a>
        <a href="#" className="text-white hover:text-gray-300">FAQ</a>
      </div>
      <div className='text-sm'>
        <p className="text- text-yellow-600">Faces Detected</p>
        <p className='text-center'>25,341</p>
      </div>
    </nav>

  )
}

export default Header