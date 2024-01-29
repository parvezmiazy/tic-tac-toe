export default function GameHistory({ history, onJump }) {
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to the move # ${move}`;
    } else {
      description = `Go to start the Game`;
    }
    return (
      <li key={move} className="bg-gray-700 text-white mb-1 p-1 rounded-sm">
        <button onClick={() => onJump(move)}>{description}</button>
      </li>
    );
  });

  return <ol className="border border-gray-400 p-1 text-lg">{moves}</ol>;
}
