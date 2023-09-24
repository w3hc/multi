import Link from 'next/link'
import Layout from '../components/Layout'
import { Heading, Text } from '@chakra-ui/react';

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <Heading>About</Heading>
    <Text  mt={8}>This is the about page! 👋</Text>
    <Text><Link href="/">Back home</Link></Text><Text ><Link href="/proposals">Proposals</Link></Text>
  </Layout>
)

export default AboutPage
