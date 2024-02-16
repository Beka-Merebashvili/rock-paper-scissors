import styled from "styled-components";
import triangle from "../images/bg-triangle.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import rock from "../images/icon-rock.svg";
import { useState } from "react";

type Choice = "rock" | "paper" | "scissors";

const choices: Choice[] = ["rock", "paper", "scissors"];

const getRandomChoice = (): Choice => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const Game: React.FC = () => {
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [botChoice, setBotChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const handlePlayerChoice = (choice: Choice) => {
    setPlayerChoice(choice);

    const botChoice = getRandomChoice();
    setBotChoice(botChoice);

    determineResult(choice, botChoice);
  };

  const determineResult = (player: Choice, bot: Choice) => {
    if (player === bot) {
      setResult("It's a tie!");
    } else if (
      (player === "rock" && bot === "scissors") ||
      (player === "paper" && bot === "rock") ||
      (player === "scissors" && bot === "paper")
    ) {
      setResult("You win!");
    } else {
      setResult("Bot wins!");
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
        </StyledGame>
      )}

{playerChoice && botChoice && (
        <ResultContainer>
          <div>
            <p>You chose:</p>
            {renderChoice(playerChoice)}
          </div>
          <div>
            <p>Bot chose:</p>
            {renderChoice(botChoice)}
          </div>
          <p>{result}</p>
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
`;

const PaperWrapper = styled.div`
  width: 130px;
    height: 134px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #4664f4;
`

const ScissorWrapper = styled.div`
  width: 130px;
    height: 134px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #c76c1b;
`

const RockWrapper = styled.div`
   width: 130px;
    height: 134px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #9d1634;
`

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
`;

export default Game;
