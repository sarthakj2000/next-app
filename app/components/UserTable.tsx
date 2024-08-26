
import Link from 'next/link';
import React, { cache, Suspense } from 'react'
import {sort} from "fast-sort"

interface User{
  id: number;
  name:string;
  email:string;
}



const UserTable = async(sortOrder:any) => {
    const res=await fetch("https://jsonplaceholder.typicode.com/users",{cache:'no-store'})
  const users: User[]=await res.json();

  const sortedUsers= sort(users).asc(sortOrder=="email"?user=>user.email:user=>user.name)
  return (
    <table className="table">
      
      <thead>
       <tr>
       <th><Link href="/users?sortOrder=name">Username</Link></th>
       <th><Link href="/users?sortOrder=email">Email</Link></th>
       </tr>
      </thead>
      <tbody>
      {sortedUsers.map((user)=>{return <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        </tr>})}
        
      </tbody>
      
    </table>
  )
}

export default UserTable