import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Container = styled.div`
  max-width: 1000px;
  border: 2px solid #9933ee;
  border-radius: 15px;
  padding: 2rem;
  background-color: #9933ff;
  color: white;
`;
export const Title = styled.span`
  font-weight: 650;
  font-size: 1.125rem;
  margin-right: 1rem;
`;
export const Result = styled.span`
  font-size: 1.25rem;
`;
