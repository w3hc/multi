import { Heading, Text, Button } from '@chakra-ui/react';
import Layout from '../components/Layout'
import Link from 'next/link'
import { useGlobalContext } from '../components/Web3Context';
import { useEffect, useState } from "react";
import RPC from '../components/ethersRPC'

    const Home = () => {

      const {
        userAddress
      } = useGlobalContext()

      return (
        <>
          <Layout>
            <Heading>Home</Heading>
            <Text mt={8}>Hello, do you DAO? 👋</Text>
            <Text mt={8}>My address:{' '}
            {userAddress ? userAddress : "no addr detected"}</Text>
            <Text mt={8}><Link href="/about">About</Link></Text><Text ><Link href="/proposals">Proposals</Link></Text>

          </Layout>
        </>
      ); 
    }
    
    export default Home;
