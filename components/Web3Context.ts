import { useContext, createContext } from "react";
import { Web3Auth } from "@web3auth/modal";
import { IProvider } from "@web3auth/base";

export type GlobalContent = {
    
    web3auth: Web3Auth | null
    setWeb3auth:(c: Web3Auth | null) => void
    provider: IProvider | null
    setProvider:(c: IProvider | null) => void
    userAddress: string
    setUserAddress:(c: string) => void
    bal: string
    setBal:(c: string) => void
    userShortenAddr: string
    setShortenAddr:(c: string) => void
    totalSupply: number
    setTotalSupply:(c: number) => void
    etherscanLink: string
    setEtherscanLink:(c: string) => void
}

export const Web3Context = createContext<GlobalContent>({
    web3auth: null, 
    setWeb3auth: () => {},
    provider: null, 
    setProvider: () => {},
    userAddress: "",
    setUserAddress: () => {},
    bal: "",
    setBal: () => {},
    totalSupply: 0,
    setTotalSupply: () => {},
    etherscanLink: "",
    setEtherscanLink: () => {},
    userShortenAddr: "", 
    setShortenAddr: () => {},
})

export const useGlobalContext = () => useContext(Web3Context)