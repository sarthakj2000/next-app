'use client'
import React from 'react'
import { notFound, useRouter } from 'next/navigation'


interface Props{
    params:{id:number}
}
const UserDetails = ({params:{id}}:Props) => {
    const router=useRouter()

    if(id>10){
        notFound()
    }
  return (
    <>
    <div>UserDetails {id}</div>
    <button className="btn btn-primary" onClick={()=>{router.push("/users")}}>Create</button>

    </>
  )
}

export default UserDetails