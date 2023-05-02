// import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useDispatch } from 'react-redux';
import { login } from '@/store/slices/wallet';

function WalletConnectionButton({ label }: { label: string }) {
  const { ethereum } = window;
  const dispatch = useDispatch();
  const walletConnect = async () => {
    if (ethereum) {
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      const address = accounts[0];
      dispatch(login({ address }));
    }
  };
  return (
    <button type="button" onClick={walletConnect}>
      {label}
    </button>
  );
}

export default WalletConnectionButton;
