import React from 'react'

interface Props{
    params:{id :number, photoId:number}
}
const Photopage = (props:Props) => {
  return (
    <div>Photopage {props.params.id} {props.params.photoId}</div>
  )
}

export default Photopage