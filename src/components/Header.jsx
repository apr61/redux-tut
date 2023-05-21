import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <nav className='bg-lime-600 text-white p-4 flex gap-4 items-center'>
        <Link to='/' className='text-2xl'>Blog Project</Link>
        <Link to='/newpost' className='text-lg ml-auto'>New Post</Link>
    </nav>
  )
}
