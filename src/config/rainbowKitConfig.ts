import '@rainbow-me/rainbowkit/styles.css';

import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, goerli } from 'wagmi';
import { infuraProvider } from 'wagmi/providers/infura';

export const apiKey = import.meta.env.VITE_INFURA_API_KEY;

export const { chains, provider } = configureChains([goerli], [infuraProvider({ apiKey })]);

export const { connectors } = getDefaultWallets({
  appName: 'NFT Minting Sprint',
  chains,
});

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
