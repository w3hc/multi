/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-shadow */
"use client";

import { Container, Box, Flex, Spacer, Button, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link'
import { useGlobalContext } from '../components/Web3Context';
import { CHAIN_NAMESPACES, IProvider } from "@web3auth/base";
import { MetamaskAdapter } from "@web3auth/metamask-adapter";
import { Web3Auth } from "@web3auth/modal";
import { TorusWalletAdapter } from "@web3auth/torus-evm-adapter";
// import RPC from ".api/ethersRPC"; // for using ethers.js
// Plugins
import { TorusWalletConnectorPlugin } from "@web3auth/torus-wallet-connector-plugin";
// Adapters

// import { WalletConnectV1Adapter } from "@web3auth/wallet-connect-v1-adapter";
import {
  WalletConnectV2Adapter,
  getWalletConnectV2Settings,
} from "@web3auth/wallet-connect-v2-adapter";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import RPC from './ethersRPC'

const clientId = process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID

const Header = () => {

  const { 
    web3auth, setWeb3auth,
    provider, setProvider,
    userAddress, setUserAddress,
    setBal
  } = useGlobalContext()

  const [torusPlugin, setTorusPlugin] = useState<TorusWalletConnectorPlugin | null>(null);
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

        // const torusPlugin = new TorusWalletConnectorPlugin({
        //   torusWalletOpts: {},
        //   walletInitOptions: {
        //     whiteLabel: {
        //       theme: { isDark: true, colors: { primary: "#00a8ff" } },
        //       logoDark: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
        //       logoLight: "https://web3auth.io/images/w3a-D-Favicon-1.svg",
        //     },
        //     useWalletConnect: true,
        //     enableLogging: true,
        //   },
        // });
        // setTorusPlugin(torusPlugin);
        // await web3auth.addPlugin(torusPlugin);

        const defaultWcSettings = await getWalletConnectV2Settings(
          "eip155",
          [1],
          "04309ed1007e77d1f119b85205bb779d"
        );
        const walletConnectV2Adapter = new WalletConnectV2Adapter({
          adapterSettings: { ...defaultWcSettings.adapterSettings },
          loginSettings: { ...defaultWcSettings.loginSettings },
        });

        web3auth.configureAdapter(walletConnectV2Adapter);

        // adding metamask adapter

        const metamaskAdapter = new MetamaskAdapter({
          clientId,
          sessionTime: 3600, // 1 hour in seconds
          web3AuthNetwork: "sapphire_mainnet",
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: "0x1",
            rpcTarget: process.env.NEXT_PUBLIC_ETHEREUM_MAINNET_ENDPOINT
          },
        });
        // we can change the above settings using this function
        metamaskAdapter.setAdapterSettings({
          sessionTime: 86400, // 1 day in seconds
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: "0x89",
            rpcTarget: "https://rpc-mainnet.matic.network", // This is the public RPC we have added, please pass on your own endpoint while creating an app
          },
          web3AuthNetwork: "sapphire_mainnet",
        });

        // it will add/update  the metamask adapter in to web3auth class
        web3auth.configureAdapter(metamaskAdapter);

        const torusWalletAdapter = new TorusWalletAdapter({
          clientId,
        });

        // it will add/update  the torus-evm adapter in to web3auth class
        web3auth.configureAdapter(torusWalletAdapter);

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
    {/* <Link href="/">Home</Link> | <Link href="/about">About</Link> |{' '}
        <Link href="/proposals">Users List</Link> |{' '}
        <a href="/api/users">Users API</a> */}
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
