import { Heading, Text } from '@chakra-ui/react';
import Layout from '../components/Layout'
import Link from 'next/link'
import { useGlobalContext } from '../components/Web3Context';

const About = () => {

  const { 
    provider,
    setTotalSupply,
    userAddress, setUserAddress,
    bal, setBal
  } = useGlobalContext()

  console.log('userAddress:', userAddress)

  return (
    <>
      <Layout>
        <Heading>About</Heading>
        <Text  mt={8}>Salut About ! 👋</Text>
        <Text  mt={8}>[test userAddress]: {provider ? userAddress : "no addr detected" } </Text>
        <Text><Link href="/about">About</Link></Text><Text ><Link href="/proposals">Proposals</Link></Text>

      </Layout>
    </>
  ); 
}

export default About;
