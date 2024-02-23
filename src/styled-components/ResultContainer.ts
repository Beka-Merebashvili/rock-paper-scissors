import styled from "styled-components";

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .bg {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .renderChoise {
    display: flex;
    gap: 50px;
    margin-bottom: 100px;
  }
  .choise {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  p {
    font-weight: bold;
    color: #ffffff;
    text-transform: uppercase;
  }
  .renderChoise p {
    font-size: 15px;
    letter-spacing: 2px;
  }
  .result {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
  .result p {
    font-size: 56px;
  }
  .playAgain {
    width: 220px;
    height: 48px;
    background-color: #f3f3f3;
    border-radius: 8px;
    border: none;
    font-size: 16px;
    font-weight: 550;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: #3b4262;
    cursor: pointer;
  }
  .rules {
    width: 128px;
    height: 40px;
    background-color: #13335e;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 2.5px;
    color: #ffffff;
    text-transform: uppercase;
    border: 1px solid #ffffff;
    border-radius: 6px;
    position: absolute;
    top: 700px;
    cursor: pointer;
  }

  @media screen and (min-width: 980px) {
    .bg {
      width: 152px;
      height: 152px;
    }
    img {
      width: 50%;
    }
    .rules {
      bottom: 30px;
      right: 30px;
    }
  }
`;

export default ResultContainer;