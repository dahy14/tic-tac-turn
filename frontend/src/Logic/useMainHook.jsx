import { useEffect } from "react";
import { useTTT } from "./useTTT";

export function useMainHook({
  tile,
  player,
  winner,
  winningBlock,
  twistToggle,
  setTile,
  setPlayer,
  setWinner,
  setWinningBlock,
  setTwistToggle,
  x,
  y,
  setX,
  setY,
}) {
  const handleTileClick = (idx) => {
    // alternative click
    if (twistToggle) {
      const validIdx = [4, 5, 7, 8];
      const newTile = [...tile];
      const newX = [...x];
      const newY = [...y];
      validIdx.forEach((id) => {
        if (id === idx) {
          newTile[id] = tile[id - 3];
          newTile[id - 3] = tile[id - 4];
          newTile[id - 4] = tile[id - 1];
          newTile[id - 1] = tile[id];
        }
      });
      setTile(newTile);
      checkWinner(newTile);
      setTwistToggle(false);
    } else {
      // Main Click
      if (tile[idx] || winner) {
        return;
      }
      // never break these 4 in order
      const newTile = [...tile];
      newTile[idx] = player;
      setTile(newTile);
      checkWinner(newTile);
    }

    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  };

  const checkWinner = (newTile) => {
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
        newTile[x] &&
        newTile[x] === newTile[y] &&
        newTile[x] === newTile[z]
      ) {
        setWinner(player);
        setWinningBlock(combination);
      }
    });
  };

  const handleTwistClick = () => {
    // toggles the twist flag
    if (twistToggle) {
      setTwistToggle(false);
    } else {
      setTwistToggle(true);
    }
  };

  const handleResetClick = () => {
    setTile(Array(9).fill(null));
    setPlayer("X");
    setWinner(null);
    setWinningBlock(Array(3).fill(null));
  };

  return {
    handleTileClick,
    handleTwistClick,
    handleResetClick,
  };
}
