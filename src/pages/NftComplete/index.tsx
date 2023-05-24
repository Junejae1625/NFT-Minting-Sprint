import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootState } from '@/store';
import { Container, Wrapper, Title, Result } from './NftComplete.styles';

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
  }, []);

  return (
    <Wrapper>
      <Container>
        <div>
          <Title>data</Title>
          <Result>
            {results.data ? `${results.data.slice(0, 20)}...` : '0X000000000000000000000000000000'}
          </Result>
        </div>
        <div>
          <Title>hash </Title>
          <Result> {results.hash}</Result>
        </div>
        <div>
          <Title>nonce</Title>
          <Result> {results.nonce}</Result>
        </div>
        <div>
          <Title>to</Title>
          <Result> {results.to}</Result>
        </div>
      </Container>
    </Wrapper>
  );
}

export default NftComplete;
