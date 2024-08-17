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
  const [x, setX] = useState(Array(9).fill(0));
  const [y, setY] = useState(Array(9).fill(0));
  const xRef = useRef(Array(9).fill(0));
  const yRef = useRef(Array(9).fill(0));
  return {
    x,
    setX,
    y,
    setY,
    xRef,
    yRef,
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
  const tileRef = useRef(tile);

  const [winningBlock, setWinningBlock] = useState(Array(3).fill(null));

  return {
    tile,
    setTile,
    tileRef,
    winningBlock,
    setWinningBlock,
  };
}
