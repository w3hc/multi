import { Heading, Text } from '@chakra-ui/react';
import Layout from '../components/Layout'
import Link from 'next/link'
import { useGlobalContext } from '../components/Web3Context';
import { useEffect, useState } from "react";

const About = () => {

  const { 
    userAddress,
  } = useGlobalContext()

  return (
    <>
      <Layout>
        <Heading>About</Heading>
        <Text mt={8}>This is the /about page! 👋</Text>
        <Text mt={8}>[userAddress]:{' '} {userAddress ? userAddress : "no addr detected" } </Text>
        <Text mt={8}><Link href="/">Home</Link></Text><Text ><Link href="/proposals">Proposals</Link></Text>

      </Layout>
    </>
  ); 
}

export default About;
