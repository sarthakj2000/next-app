import React, { ReactNode } from 'react'

interface Props{
    children:ReactNode
}

const layout = ({children}:Props) => {
  return (
    <div>
        <h1>My name si sa</h1>
        <div>{children}</div>
    </div>
  )
}

export default layout