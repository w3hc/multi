import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'
import { Container, Box, Flex, Spacer, Button, useColorModeValue } from '@chakra-ui/react';
// import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Multi",
  description: "Cool app",
};

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    
    <Header />
    
    <Container maxW="container.lg" mt={8}>
      <Box>{children}</Box>
    </Container>
    
  </div>
)

export default Layout
