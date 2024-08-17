export function AlterClick({
  x,
  y,
  xRef,
  yRef,
  setX,
  setY,
  tile,
  tileRef,
  setTile,
  setTwistToggle,
  playerRef,
  setPlayer,
}) {
  const handleAlterClick = (idx) => {
    const validIdx = [4, 5, 7, 8];
    const newX = [...x];
    const newY = [...y];

    validIdx.forEach((id) => {
      if (id == idx) {
        newX[id] = x[id] - 48;
        newY[id - 1] = y[id - 1] - 48;
        newY[id - 3] = y[id - 3] + 48;
        newX[id - 4] = x[id - 4] + 48;
      }

      setX(newX);
      setY(newY);
    });

    setTwistToggle(false);
    if (playerRef.current === "X") {
      playerRef.current = "O";
      setPlayer("O");
    } else {
      playerRef.current = "X";
      setPlayer("X");
    }
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
