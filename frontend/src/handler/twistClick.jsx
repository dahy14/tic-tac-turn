export function AlterClick({
  x,
  y,
  setX,
  setY,
  tile,
  tilePtr,
  setTilePtr,
  tileRef,
  setTwistToggle,
  playerRef,
  setPlayer,
  winner,
}) {
  const handleAlterClick = (idx) => {
    if (winner) return;

    // create a tile copy
    const newTile = [...tileRef.current];
    const newPtr = [...tilePtr];
    const validTile = [4, 5, 7, 8];

    const newX = [...x];
    const newY = [...y];

    const bottomRightPtr = newPtr[idx];
    const bottomLeftPtr = newPtr[idx - 1];

    const topLeftPtr = newPtr[idx - 4];
    const topRightPtr = newPtr[idx - 3];

    // twist the tiles
    if (validTile.includes(idx)) {
      newX[bottomRightPtr] = x[bottomLeftPtr];
      newY[bottomRightPtr] = y[bottomLeftPtr];

      newX[bottomLeftPtr] = x[topLeftPtr];
      newY[bottomLeftPtr] = y[topLeftPtr];

      newX[topLeftPtr] = x[topRightPtr];
      newY[topLeftPtr] = y[topRightPtr];

      newX[topRightPtr] = x[bottomRightPtr];
      newY[topRightPtr] = y[bottomRightPtr];

      setX(newX);
      setY(newY);
    }

    // after the twisting, handle correct tile values
    if (validTile.includes(idx)) {
      newTile[idx] = tileRef.current[idx - 3];
      newTile[idx - 1] = tileRef.current[idx];
      newTile[idx - 3] = tileRef.current[idx - 4];
      newTile[idx - 4] = tileRef.current[idx - 1];

      tileRef.current = newTile;
    }

    // then, handle the tile pointer
    if (validTile.includes(idx)) {
      newPtr[idx] = tilePtr[idx - 3];
      newPtr[idx - 1] = tilePtr[idx];
      newPtr[idx - 3] = tilePtr[idx - 4];
      newPtr[idx - 4] = tilePtr[idx - 1];
      console.log("newPtr", newPtr);
      setTilePtr(newPtr);
    }

    if (playerRef.current === "X") {
      playerRef.current = "O";
      setPlayer("O");
    } else {
      playerRef.current = "X";
      setPlayer("X");
    }
    // setTwistToggle(false);
  };
  return {
    handleAlterClick,
  };
}

export function TwistButtonClick({ twistToggle, setTwistToggle, winner }) {
  const handleTwistClick = () => {
    if (winner) return;
    if (twistToggle) {
      setTwistToggle(false);
    } else {
      setTwistToggle(true);
    }
  };

  return {
    handleTwistClick,
  };
}
