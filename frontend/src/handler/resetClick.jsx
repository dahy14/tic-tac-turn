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
}) {
  const handleResetClick = () => {
    setTile(Array(9).fill(null));
    setPlayer("X");
    setWinner(null);
    setWinningBlock(Array(3).fill(null));
    setX(Array(9).fill(0));
    setY(Array(9).fill(0));
    setTwistToggle(false);
    tileRef.current = Array(9).fill(null);
    playerRef.current = "X";
  };
  return {
    handleResetClick,
  };
}
