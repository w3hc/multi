import * as React from 'react'
import ListItem from './ListItem'
import { Proposal } from '../interfaces'

type Props = {
  items: Proposal[]
}

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List
