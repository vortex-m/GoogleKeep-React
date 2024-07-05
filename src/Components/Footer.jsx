import React from 'react'

function Footer() {
    const year = new Date().getFullYear()
  return (
    <div className='border absolute bottom-0 w-full'>
        <p className='text-center'>Copyright &copy; {year}</p>
    </div>
  )
}

export default Footer