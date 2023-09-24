import { Heading, Text } from '@chakra-ui/react';
import Layout from '../components/Layout'
import Link from 'next/link'
import { useGlobalContext } from '../components/Web3Context';


    const Home = () => {

      const { 
        provider,
        userAddress,
        setTotalSupply,
        bal, setBal
      } = useGlobalContext()


      return (
        <>
          <Layout>
            <Heading>Home</Heading>
            <Text  mt={8}>Salut ! 👋</Text>
            <Text  mt={8}>[test]: {provider ? userAddress : "no addr detected"}</Text>
            <Text><Link href="/about">About</Link></Text><Text ><Link href="/proposals">Proposals</Link></Text>

          </Layout>
        </>
      ); 
    }
    
    export default Home;
