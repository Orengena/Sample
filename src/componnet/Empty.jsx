import React from 'react'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'


export default function Empty() {
  return (
    <div>
        <Redirect to = {'/home'}/>     
    </div>
  )
}
