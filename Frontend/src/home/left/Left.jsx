import React from 'react'
import Search from './Search'
import User from './User'

function Left() {
  return (
    <div className= 'w-[30%] bg-slate-950 text-white'>
      <h1 className='font-bold text-3xl'>Chat</h1>
      <Search></Search>
      <hr />
      <User></User>
      
    </div>
  )
}

export default Left
