'use client'
import React from 'react'

interface Props{
    error:Error,
    reset:()=>void
}

const ErrorPage = ({error,reset}:Props) => {
    console.log("Error",error)
  return (
   <>
    <div>unexpected error occur</div>
    <button onClick={()=>reset()}>Retry</button>
   </>
  )
}

export default ErrorPage