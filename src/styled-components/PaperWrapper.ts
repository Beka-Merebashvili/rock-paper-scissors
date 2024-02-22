import styled from "styled-components";

const PaperWrapper = styled.div`
  width: 130px;
  height: 134px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4664f4;
  cursor: pointer;

  @media screen and (min-width: 980px) {
    width: 198px;
    height: 202px;
  }
`;

export default PaperWrapper;