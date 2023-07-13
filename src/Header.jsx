import React from 'react'

const Header = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white p-4 ">
      <div className="flex items-center">
        <div className="text-white text-lg font-bold">21faces</div>
      </div>
      <div className="flex items-center space-x-4 ">
        <a href="#" className="text-white hover:text-yellow-600 inline-block relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0e before:w-0 
          before:h-[1px] before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-white before:via-white before:to-white 
          hover:before:w-full hover:before:opacity-100">Home
        </a>
        <a href="#" className="text-white hover:text-yellow-600 inline-block relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0e before:w-0 
          before:h-[1px] before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-white before:via-white before:to-white 
          hover:before:w-full hover:before:opacity-100">About
        </a>
        <a href="#" className="text-white hover:text-yellow-600 inline-block relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0e before:w-0 
          before:h-[1px] before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-white before:via-white before:to-white 
          hover:before:w-full hover:before:opacity-100">FAQ
        </a>  
      </div>
      <div className='text-sm'>
        <p className="text- text-yellow-600">Faces Detected</p>
        <p className='text-center'>25,341</p>
      </div>
    </nav>

  )
}

export default Header