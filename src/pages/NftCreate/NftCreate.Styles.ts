import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  align-items: column;
  justify-content: center;
`;
export const Container = styled.div`
  border: 3px solid #9933ff;
  border-radius: 15px;
  padding: 20px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
`;
export const Header = styled.h1``;
export const Title = styled.h3``;

export const Line = styled.div`
  border: 2px solid #33cc33;
  margin-bottom: 2.5rem;
`;

export const Img = styled.img`
  width: 300px;
  height: 300px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
`;

export const Button = styled.button`
  width: 300px;
  height: 300px;
  font-size: 2rem;
  border: 2px dashed gray;
  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
