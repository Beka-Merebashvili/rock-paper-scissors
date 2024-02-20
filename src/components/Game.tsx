import styled from "styled-components";
import triangle from "../images/bg-triangle.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import rock from "../images/icon-rock.svg";
import { useState } from "react";

interface GameProps {
  setRules: (value: boolean) => void;
  result: string | null;
  setResult: (value: string | null) => void;
  setScore: (value: number) => void;
  score: number;
}

type Choice = "rock" | "paper" | "scissors";

const choices: Choice[] = ["rock", "paper", "scissors"];

const getRandomChoice = (): Choice => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const Game: React.FC<GameProps> = (props) => {
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [botChoice, setBotChoice] = useState<Choice | null>(null);

  const handlePlayerChoice = (choice: Choice) => {
    setPlayerChoice(choice);

    const botChoice = getRandomChoice();
    setBotChoice(botChoice);

    determineResult(choice, botChoice);
  };

  const determineResult = (player: Choice, bot: Choice) => {
    if (player === bot) {
      props.setResult("It's a tie!");
    } else if (
      (player === "rock" && bot === "scissors") ||
      (player === "paper" && bot === "rock") ||
      (player === "scissors" && bot === "paper")
    ) {
      props.setResult("You win!");
      props.setScore(props.score + 1);
    } else {
      props.setResult("Bot wins!");
    }
  };

  const renderChoice = (choice: Choice) => {
    switch (choice) {
      case "paper":
        return (
          <PaperWrapper>
            <div className="bg">
              <img src={paper} alt="paperIcon" />
            </div>
          </PaperWrapper>
        );
      case "scissors":
        return (
          <ScissorWrapper>
            <div className="bg">
              <img src={scissors} alt="scissorsIcon" />
            </div>
          </ScissorWrapper>
        );
      case "rock":
        return (
          <RockWrapper>
            <div className="bg">
              <img src={rock} alt="rockIcon" />
            </div>
          </RockWrapper>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {playerChoice ? null : (
        <StyledGame>
          <PaperWrapper onClick={() => handlePlayerChoice("paper")}>
            <div className="bg">
              <img src={paper} alt="paperIcon" />
            </div>
          </PaperWrapper>
          <ScissorWrapper onClick={() => handlePlayerChoice("scissors")}>
            <div className="bg">
              <img src={scissors} alt="scissorsIcon" />
            </div>
          </ScissorWrapper>
          <RockWrapper onClick={() => handlePlayerChoice("rock")}>
            <div className="bg">
              <img src={rock} alt="rockIcon" />
            </div>
          </RockWrapper>
          <button className="rules" onClick={() => props.setRules(true)}>
            rules
          </button>
        </StyledGame>
      )}

      {playerChoice && botChoice && (
        <ResultContainer>
          <div className="renderChoise">
            <div className="choise">
              {renderChoice(playerChoice)}
              <p>you picked</p>
            </div>
            <div className="choise">
              {renderChoice(botChoice)}
              <p>bot picked</p>
            </div>
          </div>
          <div className="result">
            <p>{props.result}</p>
            <button className="playAgain" onClick={() => setPlayerChoice(null)}>
              play again
            </button>
          </div>
          <button className="rules" onClick={() => props.setRules(true)}>
            rules
          </button>
        </ResultContainer>
      )}
    </>
  );
};

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
    margin-bottom: 70px;
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
    gap: 10px;
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
    bottom: 100px;
    cursor: pointer;
  }
`;

const PaperWrapper = styled.div`
  width: 130px;
  height: 134px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4664f4;
  cursor: pointer;
`;

const ScissorWrapper = styled.div`
  width: 130px;
  height: 134px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c76c1b;
  cursor: pointer;
`;

const RockWrapper = styled.div`
  width: 130px;
  height: 134px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #9d1634;
  cursor: pointer;
`;

const StyledGame = styled.div`
  width: 312px;
  height: 282px;
  background-image: url(${triangle});
  background-size: cover;
  background-position: 0 54px;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  gap: 52px;
  flex-wrap: wrap;
  .bg {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
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
    bottom: 100px;
    cursor: pointer;
  }
`;

export default Game;
