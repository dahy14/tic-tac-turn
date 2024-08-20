import { useState } from "react";
import { motion } from "framer-motion";
import TicTacToe from "./TicTacToe.jsx";
import Instructions from "./Instructions.jsx";
function GameScreen() {
  const [showInstructions, setShowInstructions] = useState(true);
  const handleCloseClick = () => {
    setShowInstructions(false);
  };
  return (
    <>
      <motion.div
        className="overflow-hidden h-screen bg-amber-900 flex justify-center"
        initial={{ width: "100vw" }}
        animate={{
          width: showInstructions ? "100vw" : "200vw",
          x: showInstructions ? 0 : "-100vw",
          transition: { type: "spring", duration: 0.8 },
        }}
      >
        <Instructions
          isShown={showInstructions}
          handleClose={handleCloseClick}
        />
        <div
          className={` overflow-hidden flex w-screen justify-center items-center flex-col gap-2 w-1/2 transalate-x-full`}
        >
          <TicTacToe />
        </div>
      </motion.div>
    </>
  );
}

export default GameScreen;
