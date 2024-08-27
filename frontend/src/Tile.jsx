import { motion } from "framer-motion";
import { useEffect } from "react";

function Tile({ textVal, idx, tileClick, winningBlock, x, y, xInit, yInit }) {
  return (
    <>
      <motion.span
        id={idx}
        initial={{ x: xInit, y: yInit }}
        className={`absolute min-w-12 min-h-12  z-0 border border-yellow-600   ${
          winningBlock ? "bg-yellow-300" : "bg-yellow-100"
        }`}
      ></motion.span>

      <motion.div
        className={`absolute w-12 h-12 flex justify-center items-center font-bold text-4xl text-violet-700  z-10 `}
        animate={{ x: x, y: y }} // one block is 48 * 48
        transition={{ type: "spring" }}
      >
        {textVal}
      </motion.div>

      <motion.span
        className={`absolute min-w-12 min-h-12 bg-transparent cursor-pointer text-base text-black z-20 `}
        initial={{ x: xInit, y: yInit }}
        onClick={() => tileClick(idx)}
      ></motion.span>
    </>
  );
}

export default Tile;
