import { useState } from "react";
import { motion } from "framer-motion";

function Tile({ textVal, idx, tileClick, winningBlock, x, y }) {
  return (
    <div
      className={`relative w-12 h-12  bg-gray-300 border border-black text-violet-700 font-bold text-4xl`}
      id={idx}
      onClick={() => tileClick(idx)}
    >
      <motion.div
        className={`absolute border border-yellow-500 min-w-full min-h-full flex justify-center items-center cursor-pointer ${
          winningBlock ? "bg-yellow-300" : ""
        }`}
        animate={{ x, y }} // one block is 48 * 48
        transition={{ type: "spring" }}
      >
        {textVal}
      </motion.div>
    </div>
  );
}

export default Tile;
