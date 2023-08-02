import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between'>
        <div className='flex items-center justify-between space-x-16'>
            <h1 className='flex items-center text-slate-900'>
              <span className='text-blue-900 font-bold'>D</span>eus<span className='text-blue-900 font-bold'>P</span>roject
            </h1>
            <div className='flex items-center space-x-7 text-xs text-indigo-950'>
                <a href="#">Home</a>
                <a href="#">License</a>
                <a href="#">Free Download</a>
                <a href="#">Fee</a>
            </div>
        </div>
        <div className='flex items-center space-x-7 text-xs text-indigo-950'>
            <a href="#">Log in</a>
            <a href="#" className='bg-gray-100 hover:bg-gray-200 py-2 px-5 rounded-xl'>Sign Up</a>
        </div>
    </div>
  )
}

export default Navbar