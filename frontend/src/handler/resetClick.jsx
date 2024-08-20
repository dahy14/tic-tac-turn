export function ResetClick({
  setTwistToggle,
  setTile,
  setPlayer,
  setWinner,
  setWinningBlock,
  setX,
  setY,
  tileRef,
  playerRef,
  setTilePtr,
}) {
  const handleResetClick = () => {
    setTile(Array(9).fill(null));
    setPlayer("X");
    setWinner(null);
    setWinningBlock(Array(3).fill(null));
    setX([
      "0rem",
      "3rem",
      "6rem",
      "0rem",
      "3rem",
      "6rem",
      "0rem",
      "3rem",
      "6rem",
    ]);
    setY([
      "0rem",
      "0rem",
      "0rem",
      "3rem",
      "3rem",
      "3rem",
      "6rem",
      "6rem",
      "6rem",
    ]);
    setTwistToggle(false);

    tileRef.current = Array(9).fill(null);
    playerRef.current = "X";
    setTilePtr([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  };
  return {
    handleResetClick,
  };
}
