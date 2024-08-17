import { useEffect, useRef } from "react";

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
  const xRef = useRef(x);
  const yRef = useRef(y);
  const tileRef = useRef(tile);

  useEffect(() => {
    console.log("tileRef: ", tileRef.current, "tile: ", tile);
  }, [tileRef.current, tile]);
  const handleTileClick = (idx) => {
    // alternative click
    if (twistToggle) {
      const validIdx = [4, 5, 7, 8];
      const newTile = [...tile];

      const newX = [...x];
      const newY = [...y];
      validIdx.forEach((id) => {
        if (id === idx) {
          setTile(newTile);
          tileRef.current[id] = newTile[id - 3];
          tileRef.current[id - 3] = newTile[id - 4];
          tileRef.current[id - 4] = newTile[id - 1];
          tileRef.current[id - 1] = newTile[id];
          // framer motion animation values for translating tiles
          xRef.current[id] = x[id] - 48;
          yRef.current[id - 1] = y[id - 1] - 48;
          yRef.current[id - 3] = y[id - 3] + 48;
          xRef.current[id - 4] = x[id - 4] + 48;
          // console.log("newX: ", newX);
          // console.log("newY: ", newY);

          // correct indexing of rotated
        }
      });

      setX(xRef.current);
      setY(yRef.current);
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
      tileRef.current = newTile;
    }
    checkWinner(tileRef.current);
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
        setWinner(newTile[x]);
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
    setX(Array(9).fill(0));
    setY(Array(9).fill(0));
  };

  return {
    handleTileClick,
    handleTwistClick,
    handleResetClick,
  };
}
