import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootState } from '@/store';
import { Wrapper } from './NftComplete.styles';

function NftComplete() {
  const { data, hash, nonce, to } = useSelector((state: RootState) => state.result);
  const [results, setResults] = useState({
    data: '',
    hash: '',
    nonce: '',
    to: '',
  });
  useEffect(() => {
    const temp = {
      data,
      hash,
      nonce,
      to,
    };
    setResults(temp);
    console.log(data, hash, nonce, to);
  }, []);

  return (
    <Wrapper>
      <div>data</div>
      <div> {results.data}</div>
      <div>hash </div>
      <div> {results.hash}</div>
      <div>nonce</div>
      <div> {results.nonce}</div>
      <div>to</div>
      <div> {results.to}</div>
    </Wrapper>
  );
}

export default NftComplete;
