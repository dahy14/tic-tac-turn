import { useState, useRef } from "react";

export function usePlayer() {
  const [player, setPlayer] = useState("X");

  const [winner, setWinner] = useState(null);
  const playerRef = useRef("X");

  return {
    player,
    setPlayer,
    playerRef,
    winner,
    setWinner,
  };
}

export function usePosition() {
  const [x, setX] = useState([
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
  const [y, setY] = useState([
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
  const [init, setInit] = useState(true);
  return {
    x,
    setX,
    y,
    setY,
    init,
    setInit,
  };
}

export function useTwistState() {
  const [twistToggle, setTwistToggle] = useState(false);
  return {
    twistToggle,
    setTwistToggle,
  };
}

export function useTile() {
  const [tile, setTile] = useState(Array(9).fill(null));

  // const [tile, setTile] = useState([
  //   "0",
  //   "0",
  //   "2",
  //   "3",
  //   "4",
  //   "5",
  //   "6",
  //   "7",
  //   "8",
  // ]);
  const [tilePtr, setTilePtr] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const tileRef = useRef(tile);

  const [winningBlock, setWinningBlock] = useState(Array(3).fill(null));

  return {
    tile,
    setTile,
    tilePtr,
    setTilePtr,
    tileRef,
    winningBlock,
    setWinningBlock,
  };
}
