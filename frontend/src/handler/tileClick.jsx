export function TileClick({
  tile,
  tilePtr,
  setTile,
  tileRef,
  player,
  playerRef,
  setPlayer,
  winner,
  setWinner,
  twistToggle,
}) {
  const handleTileClick = (idx) => {
    if (tileRef.current[idx] || winner || twistToggle) {
      return;
    }
    console.log("ptr");
    tileRef.current[[idx]] = playerRef.current;

    setTile(tileRef.current);

    if (playerRef.current === "X") {
      playerRef.current = "O";
      setPlayer("O");
    } else {
      playerRef.current = "X";
      setPlayer("X");
    }
  };
  return {
    handleTileClick,
  };
}
