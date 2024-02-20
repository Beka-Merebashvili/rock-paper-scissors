import { useState } from "react";
import Game from "./components/Game";
import Rules from "./components/Rules";
import Score from "./components/Score";
import Globalstyles from "./styled-components/Globalstyles";

function App() {
  const [rules, setRules] = useState<boolean>(false);
  const [result, setResult] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);

  return (
    <>
      <Globalstyles />
      <Score score={score} />
      <Game
        setRules={setRules}
        result={result}
        setResult={setResult}
        setScore={setScore}
        score={score}
      />
      {rules ? <Rules setRules={setRules} /> : null}
    </>
  );
}

export default App;
