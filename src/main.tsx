import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { WagmiConfig } from 'wagmi';
import App from './App';
import { chains, wagmiClient } from './config/rainbowKitConfig';
import { store } from './store';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RainbowKitProvider>
    </WagmiConfig>
  </Provider>,
);
