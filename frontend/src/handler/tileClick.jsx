import { useEffect } from "react";

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
    const newTile = [...tile];
    if (newTile[tilePtr[idx]] || winner || twistToggle) {
      return;
    }

    console.log("newTile", newTile);
    newTile[tilePtr[idx]] = playerRef.current;

    newTile.map((tile, i) => {
      tile = newTile[tilePtr[i]];

      tileRef.current[i] = tile;
    });

    setTile(newTile);

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
