import Link from 'next/link'
import React from 'react'

interface Props{
    params:{slug:string[]},
    searchParams:{sortOrder:string}
}
const page = ({params:{slug}, searchParams:{sortOrder}}:Props) => {
  return (

    <div>helo {slug}
   <Link href={`/${slug}`}>{sortOrder}</Link> 
    </div>
  )
}

export default page