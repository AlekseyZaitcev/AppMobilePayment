import styled from "styled-components";
import MaskedInput from "react-input-mask";

const InputForm = styled(MaskedInput)`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 40px;
  border: 1px solid #000;
  margin: 15px 0 15px 0;
  padding-left: 10px;

  :hover,
  :focus {
    color: black;
    background: white;
    border: 2px solid black;
    ::placeholder {
      color: black;
    }
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  @media (max-width: 768px) {
    width: 300px;
  }
`;

export default InputForm;
