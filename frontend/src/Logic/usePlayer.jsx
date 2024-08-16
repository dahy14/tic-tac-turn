import { useState, useRef } from "react";
export function usePlayer() {
  const [player, setPlayer] = useState("X");
  const playerRef = useRef("X");

  return {
    player,
    setPlayer,
    playerRef,
  };
}
