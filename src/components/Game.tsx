import styled from "styled-components";
import triangle from "../images/bg-triangle.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import rock from "../images/icon-rock.svg";
import { useState } from "react";

type Choice = 'rock' | 'paper' | 'scissors';

const choices: Choice[] = ['rock', 'paper', 'scissors'];

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
      (player === 'rock' && bot === 'scissors') ||
      (player === 'paper' && bot === 'rock') ||
      (player === 'scissors' && bot === 'paper')
    ) {
      setResult('You win!');
    } else {
      setResult('Bot wins!');
    }
  };
const getImagePath = (choice: Choice): string => {
  // You may need to adjust the path based on your project structure
  switch (choice) {
    case 'rock':
      return rock;
    case 'paper':
      return paper;
    case 'scissors':
      return scissors;
    default:
      return '';
  }
};


  return (
    <>
    {playerChoice ?  null : <StyledGame>
      <div className="container paper">
        <div onClick={() => handlePlayerChoice('paper')} className="bg">
          <img src={paper} alt="paperIcon" />
        </div>
      </div>
      <div onClick={() => handlePlayerChoice('scissors')} className="container scissors">
        <div className="bg">
          <img src={scissors} alt="scissorsIcon" />
        </div>
      </div>
      <div onClick={() => handlePlayerChoice('rock')} className="container rock">
        <div className="bg">
          <img src={rock} alt="rockIcon" />
        </div>
      </div>
    </StyledGame>}
    
    {playerChoice && botChoice && (
        <div className="result">
          <p>You chose:</p>
          <img src={getImagePath(playerChoice)} alt={playerChoice} />
          <p>Bot chose:</p>
          <img src={getImagePath(botChoice)} alt={botChoice} />
          <p>{result}</p>

          
        </div>
      )}
    </>
  );
};



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
  .container {
    width: 130px;
    height: 134px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .paper {
    background-color: #4664f4;
  }
  .scissors {
    background-color: #c76c1b;
  }
  .rock {
    background-color: #9d1634;
  }
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
