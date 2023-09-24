import { Heading, Text } from '@chakra-ui/react';
import Layout from '../components/Layout'
import Link from 'next/link'
import { useGlobalContext } from '../components/Web3Context';
import { useEffect, useState } from "react";


    const Home = () => {

      const { 
        provider,
        userAddress,
        setTotalSupply,
        bal, setBal
      } = useGlobalContext()

      useEffect(() => {
        if (!provider) {
          return;
        }
        console.log('userAddress:', userAddress)
      }, [provider, userAddress]);

      return (
        <>
          <Layout>
            <Heading>Home</Heading>
            <Text  mt={8}>Salut ! 👋</Text>
            <Text  mt={8}>[test]: {userAddress ? userAddress : "no addr detected"}</Text>
            <Text><Link href="/about">About</Link></Text><Text ><Link href="/proposals">Proposals</Link></Text>

          </Layout>
        </>
      ); 
    }
    
    export default Home;
