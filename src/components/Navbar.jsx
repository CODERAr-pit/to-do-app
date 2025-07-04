import React from 'react'

const Navbar = () => {
  return (
   <nav className='bg-blue-800 text-white w-full h-12 grid items-center rounded-3xl rounded-b-none ' >
    <div className='flex justify-between'>
        <div className='bold  mx-4'>
        Xe-Todo
         </div>
    <div className='flex gap-4 mx-4'>
       <div>Home</div>
       <div>Your Tasks</div>
    </div>
    </div>
    
   </nav>
  )
}
export default Navbar