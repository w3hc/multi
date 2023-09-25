/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-shadow */
"use client";

import { Flex, Spacer, Button, useColorModeValue } from '@chakra-ui/react';
import { useGlobalContext } from '../components/Web3Context';
import { CHAIN_NAMESPACES } from "@web3auth/base";
import { Web3Auth } from "@web3auth/modal";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import RPC from './ethersRPC'

const clientId = process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID

const Header = () => {

  const { 
    web3auth, setWeb3auth,
    provider, setProvider,
    userAddress, setUserAddress
  } = useGlobalContext()

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        const web3auth = new Web3Auth({
          clientId,
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: "0x1",
            rpcTarget: process.env.NEXT_PUBLIC_ETHEREUM_MAINNET_ENDPOINT
          },
          web3AuthNetwork: "sapphire_mainnet",
        });

        setWeb3auth(web3auth);
        setProvider(web3auth.provider);

        await web3auth.initModal();

        if (web3auth.connected) {
          setLoggedIn(true);
          const ethersProvider = new ethers.BrowserProvider(web3auth.provider);
          const signer = await ethersProvider.getSigner()
          setUserAddress(await signer.getAddress())
        }
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  useEffect(() => {
    if (!provider) {
      return;
    }
    getAccounts()
  }, []);

  const login = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const web3authProvider = await web3auth.connect();
    setProvider(web3authProvider);
    const ethersProvider = new ethers.BrowserProvider(web3auth.provider);
    const signer = await ethersProvider.getSigner()
    setUserAddress(await signer.getAddress())
    setLoggedIn(true);
  };

  const logout = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    await web3auth.logout();
    setProvider(null);
    setLoggedIn(false);
    setUserAddress("")
  };

  const getAccounts = async () => {
    if (!provider) {
      return;
    }
    const rpc = new RPC(provider);
    const address = await rpc.getAccounts();
    return address
  };

  return(
    <Flex as="header" bg={useColorModeValue('blackAlpha.100', 'blackAlpha.100')} px={4} py={5} mb={8} alignItems="center">
      <Spacer />
      <Flex alignItems="center" gap={4}>
        {loggedIn === true ? 
          <Button colorScheme="purple" variant="ghost" onClick={logout} size='sm'>
            Logout
          </Button> :
          <Button colorScheme="blue" variant="ghost" size='sm' onClick={login}>
            Login
          </Button>
          }
      </Flex>
    </Flex>
  )
}

export default Header
