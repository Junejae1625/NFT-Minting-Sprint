import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@/store/slices/wallet';
import { RootState } from '@/store';

const Button = styled.button`
  background-color: violet;
  border: none;
  border-radius: 5px;
  padding: 0.8rem 0.5rem;
  color: white;
  font-weight: 700;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`;
const Address = styled.span`
  font-size: 1.1rem;
  color: #9933ff;
  font-weight: 750;
`;

function WalletConnectionButton({ label }: { label: string }) {
  const [isLogin, setIsLogin] = useState('');
  const { ethereum } = window;
  const { address } = useSelector((state: RootState) => state.wallet);
  const dispatch = useDispatch();
  const walletConnect = async () => {
    if (ethereum) {
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      const account = accounts[0];
      dispatch(login({ address: account }));
    }
  };

  useEffect(() => {
    if (address) {
      setIsLogin(address);
    }
  }, [address]);

  return isLogin ? (
    <div>
      <span>Your Address is </span>
      <Address>{`${isLogin.slice(0, 18)}...`}</Address>
    </div>
  ) : (
    <Button type="button" onClick={walletConnect}>
      {label}
    </Button>
  );
}

export default WalletConnectionButton;
