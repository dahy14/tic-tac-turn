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
  const xRef = useRef(x);
  const yRef = useRef(y);
  return {
    x,
    setX,
    y,
    setY,
    xRef,
    yRef,
  };
}
