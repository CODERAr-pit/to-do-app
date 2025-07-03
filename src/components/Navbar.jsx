import React from 'react'

const Navbar = () => {
  return (
   <nav className='bg-blue-900 text-red-500 w-full h-8 grid items-center ' >
    <div className='flex justify-between'>
        <div className='bold  mx-4'>
        i-Todo
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