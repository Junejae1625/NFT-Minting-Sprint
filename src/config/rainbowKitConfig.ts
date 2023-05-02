import '@rainbow-me/rainbowkit/styles.css';

import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createClient } from 'wagmi';
import { polygonMumbai } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';

export const apiKey = import.meta.env.VITE_ALCHEMY_API_KEY;

export const { chains, provider } = configureChains([polygonMumbai], [alchemyProvider({ apiKey })]);

export const { connectors } = getDefaultWallets({
  appName: 'NFT Minting Sprint',
  chains,
});

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
