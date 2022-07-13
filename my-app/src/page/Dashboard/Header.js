import React from 'react'

function Header({setisAdding}) {
  return (
    <header>
      <h1>Employee Management System</h1>
      <div>
        <button onClick={() => setisAdding(true)} className='round-button'>Add Employee</button>
      </div>
    </header>
  )
}

export default Header