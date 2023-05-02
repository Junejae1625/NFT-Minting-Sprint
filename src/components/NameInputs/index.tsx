import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

const Inputs = styled.input`
  width: 94%;
  padding: 8px;
  margin-bottom: 0.8rem;
`;

function NameInputs({
  placeHolder,
  value,
  setValue,
}: {
  placeHolder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}) {
  return (
    <Inputs
      value={value}
      type="text"
      placeholder={placeHolder}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default NameInputs;
