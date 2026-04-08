import React from 'react'

const DashboardPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className="animate-pulse text-gray-500">
        Dashboard Page
      </div>
    </div>
  )
}

export default DashboardPage