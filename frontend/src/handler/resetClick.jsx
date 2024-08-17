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
  xRef,
  yRef,
}) {
  const handleResetClick = () => {
    setTile(Array(9).fill(null));
    setPlayer("X");
    setWinner(null);
    setWinningBlock(Array(3).fill(null));
    setX(Array(9).fill(0));
    setY(Array(9).fill(0));
    setTwistToggle(false);
    setX(Array(9).fill(0));
    setY(Array(9).fill(0));
    tileRef.current = Array(9).fill(null);
    playerRef.current = "X";
    xRef.current = Array(9).fill(0);
    yRef.current = Array(9).fill(0);
  };
  return {
    handleResetClick,
  };
}
