import styled from "styled-components";
import logo from "../images/logo.svg";

interface ScoreProps {
  score: number;
}

const Score: React.FC<ScoreProps> = (props) => {
  return (
    <StyledDiv>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="scoreBox">
        <p className="score">SCORE</p>
        <p className="number">{props.score}</p>
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
  margin: 30px 0 100px 0;
  .logo {
    width: 84px;
  }
  .logo img {
    width: 100%;
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
    font-weight: bold;
    color: #2a45c2;
    letter-spacing: 2px;
  }
  .number {
    color: #565468;
    font-size: 40px;
    font-weight: bold;
  }

  @media screen and (min-width: 980px) {
    width: 700px;
    height: 150px;
    .logo {
    width: 160px;
  }
  .scoreBox {
    width: 150px;
    height: 114px;
    gap: 4px;
    padding-top: 8px;
  }
  .score {
    font-size: 16px;
    letter-spacing: 2.5px;
  }
  .number {
    font-size: 64px;
  }
  }
 
`;

export default Score;
