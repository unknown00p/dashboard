import React from 'react'

function App() {
  return (
    <div className='flex flex-col-reverse lg:flex-row max-h-screen max-w-1440'>
      <div className='lg:w-300'>Sidebar</div>
      <div className='h-screen bg-red-600 lg:w-1140'>main content</div>
    </div>
  )
}

export default App
