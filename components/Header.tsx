
import { Container, Box, Flex, Spacer, Button, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link'

const Header = () => {

    const login = () => {
        console.log("Hello login")
    }

    return(
        <Flex as="header" bg={useColorModeValue('blackAlpha.100', 'blackAlpha.100')} px={4} py={5} mb={8} alignItems="center">
        {/* <Link href="/">Home</Link> | <Link href="/about">About</Link> |{' '}
            <Link href="/proposals">Users List</Link> |{' '}
            <a href="/api/users">Users API</a> */}
          <Spacer />
          <Flex alignItems="center" gap={4}>
            {/* {loggedIn ? 
              <Button colorScheme="purple" variant="ghost" onClick={logout} size='sm'>
                Logout
              </Button> : */}
              <Button colorScheme="purple" variant="ghost" size='sm' onClick={login}>
                Login
              </Button>
              {/* } */}
          </Flex>
        </Flex>
    )
}

export default Header
