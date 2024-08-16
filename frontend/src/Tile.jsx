import { useState } from "react";
import { motion } from "framer-motion";

function Tile({ textVal, idx, tileClick, winningBlock, x, y }) {
  return (
    <div className="min-w-12 min-h-12 font-bold text-4xl text-violet-700">
      <motion.div
        className={`absolute w-12 h-12 flex justify-center items-center cursor-pointer border border-yellow-600  ${
          winningBlock ? "bg-yellow-300" : "bg-yellow-100"
        }`}
        id={idx}
        animate={{ x, y }} // one block is 48 * 48
        transition={{ type: "spring" }}
      >
        {textVal}
      </motion.div>
      <span
        className={`absolute min-w-12 min-h-12 bg-transparent  z-20 `}
        onClick={() => tileClick(idx)}
      ></span>
    </div>
  );
}

export default Tile;
