import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Container, Box, Flex, Spacer, Button, useColorModeValue } from '@chakra-ui/react';

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
    <Flex as="header" bg={useColorModeValue('blackAlpha.100', 'blackAlpha.100')} px={4} py={5} mb={8} alignItems="center">
    <Link href="/">Home</Link> | <Link href="/about">About</Link> |{' '}
        <Link href="/proposals">Users List</Link> |{' '}
        <a href="/api/users">Users API</a>
      <Spacer />
      <Flex alignItems="center" gap={4}>
        {/* {loggedIn ? 
          <Button colorScheme="purple" variant="ghost" onClick={logout} size='sm'>
            Logout
          </Button> : */}
          <Button colorScheme="purple" variant="ghost" size='sm'>
            Login
          </Button>
          {/* } */}
      </Flex>
    </Flex>
    
    <Container maxW="container.lg" mt={16}>
      <Box>{children}</Box>
    </Container>
    
  </div>
)

export default Layout
