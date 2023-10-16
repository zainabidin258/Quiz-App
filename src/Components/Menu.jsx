import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Context'

function Menu() {
  const {gameState, setGameState} = useContext(QuizContext);
  return (
    <div className='Menu'>
      <button onClick={ () => {
        setGameState("quiz")
      }}>
        Start
      </button>
    </div>
  )
}

export default Menu
