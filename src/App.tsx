import { useState } from "react"
import Game from "./components/Game"
import Rules from "./components/Rules"
import Score from "./components/Score"
import Globalstyles from "./styled-components/Globalstyles"

function App() {
  const [rules , setRules] = useState<boolean>(false)
  return (
    <>
    <Globalstyles />
    <Score />
    <Game setRules={setRules} />
    {rules ? <Rules setRules={setRules}/> : null}
    </>
  )
}

export default App
