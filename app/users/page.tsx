
import React, { cache, Suspense } from 'react'
import UserTable from '../components/UserTable';

interface User{
  id: number;
  name:string;
  email:string;
}

interface Props{
  searchParams:{sortOrder:string}
}

const page = async ({searchParams:{sortOrder}}:Props) => {
  
  return (
    <>
   
    <Suspense fallback={<p>Loading...</p>}>
    <UserTable sortOrder={sortOrder} />
    </Suspense>
    </>

  )
}

export default page