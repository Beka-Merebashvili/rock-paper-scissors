import styled from "styled-components";

const RockWrapper = styled.div`
  width: 130px;
  height: 134px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #9d1634;
  cursor: pointer;

  @media screen and (min-width: 980px) {
    width: 198px;
    height: 202px;
  }
`;

export default RockWrapper;