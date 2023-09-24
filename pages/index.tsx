import { Heading } from '@chakra-ui/react';
import Layout from '../components/Layout'
import Link from 'next/link'

    const Home = () => {
      return (
        <>
          <Layout>
            <Heading>Welcome to Chakra + Next.js</Heading>
            
            <h1>Salut ! 👋</h1>
            <p><Link href="/about">About</Link></p>
          </Layout>
        </>
      ); 
    }
    
    export default Home;
