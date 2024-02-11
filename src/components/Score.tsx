import styled from "styled-components";

const Score = () => {
  return (
    <StyledDiv>
      <h2>rock paper scissors</h2>
      <div className="scoreBox">
        <p className="score">SCORE</p>
        <p className="number">11</p>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 312px;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #707070;
  border-radius: 6px;
  padding: 0 18px;
  margin-top: 30px;
  h2 {
    font-size: 16px;
    color: #ffffff;
    width: 84px;
    text-transform: uppercase;
  }
  .scoreBox {
    width: 80px;
    height: 72px;
    background-color: #f3f3f3;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
  }
  .score {
    font-size: 11px;
    font-weight: 700;
    color: #2a45c2;
    letter-spacing: 2px;
  }
  .number {
    color: #565468;
    font-size: 40px;
    font-weight: bold;
    /* letter-spacing: -3px; */
  }
`;

export default Score;
