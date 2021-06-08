import React, { FC } from 'react'
import { Card } from '../Card'

import './List.scss'
export const List: FC = () => {
  return (
    <section className='list'>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </section>
  )
}
