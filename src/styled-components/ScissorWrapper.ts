import styled from "styled-components";

const ScissorWrapper = styled.div`
  width: 130px;
  height: 134px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c76c1b;
  cursor: pointer;

  @media screen and (min-width: 980px) {
    width: 198px;
    height: 202px;
  }
`;

export default ScissorWrapper;