import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Web3Context } from '../components/Web3Context'
import { useState } from "react";
import { Web3Auth } from "@web3auth/modal";
import { IProvider } from "@web3auth/base";

const App = ({ Component, pageProps }: AppProps) => {

    const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<IProvider | null>(null);
  const [userAddress, setUserAddress] = useState<string>("")
  const [bal, setBal] = useState<string>("");
  const [totalSupply, setTotalSupply] = useState<number>(0);

  const [userShortenAddr, setShortenAddr] = useState<string>("")
  const [etherscanLink, setEtherscanLink] = useState("");
  // const [txHash, setTxHash] = useState("");
  // const [net, setNet] = useState("");
  // const [firstName, setFirstName] = useState("anon");
  // const [pfp, setPfp] = useState(loader); 
    return (
        <Web3Context.Provider value={{
            web3auth, setWeb3auth,
            provider, setProvider,
            userAddress, setUserAddress,
            bal, setBal,
            userShortenAddr, setShortenAddr,
            totalSupply, setTotalSupply,
            etherscanLink, setEtherscanLink,
            // txHash, setTxHash,
            // net, setNet,
            // firstName, setFirstName,
            // pfp, setPfp
          }}>
    <ChakraProvider>
        <Component {...pageProps} />
    </ChakraProvider>
    </Web3Context.Provider>

    );
}

export default App;