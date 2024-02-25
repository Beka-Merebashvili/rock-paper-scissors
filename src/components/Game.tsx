import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import rock from "../images/icon-rock.svg";
import ResultContainer from "../styled-components/ResultContainer";
import PaperWrapper from "../styled-components/PaperWrapper";
import ScissorWrapper from "../styled-components/ScissorWrapper";
import RockWrapper from "../styled-components/RockWrapper";
import StyledGame from "../styled-components/StyledGame";
import { useState } from "react";
import { motion } from "framer-motion";

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
      props.setResult("You Lose!");
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
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
        </motion.div>
      )}

      {playerChoice && botChoice && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
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
              <button
                className="playAgain"
                onClick={() => setPlayerChoice(null)}
              >
                play again
              </button>
            </div>
            <button className="rules" onClick={() => props.setRules(true)}>
              rules
            </button>
          </ResultContainer>
        </motion.div>
      )}
    </>
  );
};

export default Game;
