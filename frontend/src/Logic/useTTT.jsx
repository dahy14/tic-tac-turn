import { useState } from "react";
export function useTTT() {
  const [tile, setTile] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [winningBlock, setWinningBlock] = useState(Array(3).fill(null));
  const [twistToggle, setTwistToggle] = useState(false);

  return {
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
  };
}
