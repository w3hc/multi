import Link from 'next/link'
import Layout from '../components/Layout'
import { Heading, Text } from '@chakra-ui/react';

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <Heading>About</Heading>
    <Text  mt={8}>This is the about page! 👋</Text>
    <Text mt={8}><Link href="/">Back home</Link></Text>
  </Layout>
)

export default AboutPage
