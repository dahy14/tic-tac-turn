export function checkWinner({ tileRef, winner, setWinner, setWinningBlock }) {
  if (winner) return;
  const allWinningCombination = [
    // horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];

  allWinningCombination.forEach((combination) => {
    const [x, y, z] = combination;
    if (
      tileRef.current[x] &&
      tileRef.current[x] === tileRef.current[y] &&
      tileRef.current[x] === tileRef.current[z]
    ) {
      setWinner(tileRef.current[x]);
      setWinningBlock(combination);
    }
  });
}
