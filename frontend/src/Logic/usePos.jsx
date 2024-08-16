import { useState } from "react";
export function usePosition() {
  const [x, setX] = useState(Array(9).fill(0));
  const [y, setY] = useState(Array(9).fill(0));

  return {
    x,
    setX,
    y,
    setY,
  };
}
