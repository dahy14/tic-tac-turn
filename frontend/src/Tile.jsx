import { motion } from "framer-motion";

function Tile({ textVal, idx, tileClick, winningBlock, x, y }) {
  return (
    <div className="min-w-12 min-h-12 font-bold text-4xl text-violet-700">
      <span
        className={`absolute min-w-12 min-h-12 bg-transparent border border-yellow-600 cursor-pointer z-0  ${
          winningBlock ? "bg-yellow-300" : "bg-yellow-100"
        }`}
        id={idx}
      ></span>

      <motion.div
        className={`absolute w-12 h-12 flex justify-center items-center  z-10`}
        animate={{ x, y }} // one block is 48 * 48
        transition={{ type: "spring" }}
      >
        {textVal}
      </motion.div>
      <span
        className={`absolute min-w-12 min-h-12 bg-transparent cursor-pointer z-20 `}
        onClick={() => tileClick(idx)}
      ></span>
    </div>
  );
}

export default Tile;
