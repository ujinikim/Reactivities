import React from 'react'
import { Duck } from './demo'

interface Props {
  duck: Duck
}

export default function DuckItem({ duck }: Props) {
  return (
    <div key={duck.name}>
      <h1>{duck.name}</h1>
    </div>
  )
}
