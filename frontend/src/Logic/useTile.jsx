import { useState, useRef } from "react";
export function useTile() {
  const [tile, setTile] = useState(Array(9).fill(null));
  const tileRef = useRef(tile);

  return {
    tile,
    setTile,
    tileRef,
  };
}
