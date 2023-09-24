import { GetStaticProps } from 'next'
import Link from 'next/link'

import { Proposal } from '../../interfaces'
import { sampleUserData } from '../../utils/sample-data'
import Layout from '../../components/Layout'
import List from '../../components/List'
import { Heading, Text } from '@chakra-ui/react';

type Props = {
  items: Proposal[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Proposals">
    <Heading>Open proposals</Heading>
    <br /><br />
    <List items={items} />
    <br />
    <Text>
      <Link href="/">Back home</Link>
    </Text>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Proposal[] = sampleUserData
  return { props: { items } }
}

export default WithStaticProps
