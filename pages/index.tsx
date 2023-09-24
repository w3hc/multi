import { Heading, Text } from '@chakra-ui/react';
import Layout from '../components/Layout'
import Link from 'next/link'

    const Home = () => {
      return (
        <>
          <Layout>
            <Heading>Home</Heading>
            <Text  mt={8}>Salut ! 👋</Text>
            <Text><Link href="/about">About</Link></Text><Text ><Link href="/proposals">Proposals</Link></Text>

          </Layout>
        </>
      ); 
    }
    
    export default Home;
