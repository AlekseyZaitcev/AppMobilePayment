import styled from "styled-components";

const FormMobilePayment = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  min-height: 400px;
  border-radius: 30px;
  background: rgba(209, 209, 209, 0.2);

  @media (max-width: 768px) {
    margin: 0 5% 0 5%;
  }
`;

export default FormMobilePayment;
