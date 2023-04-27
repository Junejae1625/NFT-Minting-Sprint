import { ConnectButton } from '@rainbow-me/rainbowkit';

function WalletConnectionButton({ label }: { label: string }) {
  return <ConnectButton label={label} />;
}

export default WalletConnectionButton;
