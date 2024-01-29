import { useState } from "react";
import Board from "./Board";
import GameHistory from "./GameHistory";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setxIsNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    setxIsNext(!xIsNext);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
    setxIsNext(move % 2 === 0);
  }

  return (
    <div className="flex justify-center p-4">
      <div className="mr-16">
        <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay} />
      </div>
      <div>
        <GameHistory onJump={jumpTo} history={history} />
      </div>
    </div>
  );
}
