import React from 'react'

const Layout = ({children}: { children: React.ReactNode }) => {
  return (
    <div>
        <h1 className="font-extrabold text-8xl">Our Works</h1>
        {children}
    </div>
  )
}

export default Layout