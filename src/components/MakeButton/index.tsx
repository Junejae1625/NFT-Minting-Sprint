import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;
const Buttons = styled.button`
  background-color: #9933ff;
  width: 150px;
  height: 50px;
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
`;

function MakeButton({ onClick }: { onClick: () => void }) {
  return (
    <Wrapper>
      <Buttons onClick={onClick}>Now Make!</Buttons>
    </Wrapper>
  );
}

export default MakeButton;
