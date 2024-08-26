'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  let {status, data:session} = useSession()
  
  return (
    <div className='flex bg-slate-200 p-5 space-x-3'>
        <Link href="/" className="mr-5">Next Js</Link>
        <Link href="users">Users</Link>
        {status=="loading" && <div>Loading...</div>}
        {status=="authenticated" && <div>{session.user!.name}
          <Link href="/api/auth/signout" style={{marginLeft:"3px"}}>Sign out</Link>
          </div>}
        {status=="unauthenticated" && <Link href="/api/auth/signin">Login</Link>}
    </div>
  )
}

export default NavBar