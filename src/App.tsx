import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { GameIntro } from './components/GameIntro';
import { NumberSheet } from './components/NumberSheet';
import { GameResult } from './components/GameResult';
import { GameState, Sheet } from './types/game';
import { generateSheets, calculateGuessedNumber, getTotalSheets } from './utils/gameLogic';

const GAME_STATES = {
  INTRO: 'intro',
  PLAYING: 'playing',
  RESULT: 'result'
} as const;

type GameStateType = typeof GAME_STATES[keyof typeof GAME_STATES];

function GameApp() {
  const [gameState, setGameState] = useState<GameStateType>(GAME_STATES.INTRO);
  const [sheets] = useState<Sheet[]>(() => generateSheets());
  const [currentSheetIndex, setCurrentSheetIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<boolean[]>([]);
  const [guessedNumber, setGuessedNumber] = useState<number>(0);

  const handleGameStart = () => {
    setGameState(GAME_STATES.PLAYING);
    setCurrentSheetIndex(0);
    setUserAnswers([]);
    setGuessedNumber(0);
  };

  const handleAnswer = (answer: boolean) => {
    const newAnswers = [...userAnswers, answer];
    setUserAnswers(newAnswers);

    if (currentSheetIndex < sheets.length - 1) {
      setCurrentSheetIndex(currentSheetIndex + 1);
    } else {
      // Game complete - calculate result
      const result = calculateGuessedNumber(newAnswers, sheets);
      setGuessedNumber(result);
      setGameState(GAME_STATES.RESULT);
    }
  };

  const handleRestart = () => {
    setGameState(GAME_STATES.INTRO);
    setCurrentSheetIndex(0);
    setUserAnswers([]);
    setGuessedNumber(0);
  };

  return (
    <>
      <ThemeToggle />
      
      {gameState === GAME_STATES.INTRO && (
        <GameIntro onStart={handleGameStart} />
      )}
      
      {gameState === GAME_STATES.PLAYING && (
        <NumberSheet
          sheet={sheets[currentSheetIndex]}
          currentSheet={currentSheetIndex + 1}
          totalSheets={getTotalSheets()}
          onAnswer={handleAnswer}
        />
      )}
      
      {gameState === GAME_STATES.RESULT && (
        <GameResult
          guessedNumber={guessedNumber}
          onRestart={handleRestart}
        />
      )}
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <GameApp />
    </ThemeProvider>
  );
}

export default App;