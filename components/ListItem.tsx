import React from 'react'
import Link from 'next/link'

import { Proposal } from '../interfaces'

type Props = {
  data: Proposal
}

const ListItem = ({ data }: Props) => (
  <Link href="/proposals/[id]" as={`/proposals/${data.id}`}>
    {data.id}:{data.name}
  </Link>
)

export default ListItem
