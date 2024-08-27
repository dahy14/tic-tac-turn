import twistImage from "./assets/twist.png";
import { useState } from "react";
import { motion } from "framer-motion";
function Instructions({ isShown, handleClose }) {
  return (
    <div
      className={` bg-amber-800 w-screen p-4 flex flex-col  justify-center items-center gap-4 text-white`}
    >
      <div>
        <h1 className="text-2xl font-bold ">Instructions</h1>
        <p>
          1. The rules are simple: get three of your marks in a row, column, or
          diagonal to win.
        </p>
        <p>2. Click on a square to place your mark.</p>
        <p>3. The game will alternate between X and O.</p>
        <p>4. The twist is... a twist</p>
        <p className="text-right">goodluck,</p>
        <p className="text-right">-naypes</p>
      </div>

      <img
        className={`max-w-screen-sm ${isShown ? "" : "hidden"}`}
        src={twistImage}
        alt="Twist"
      />
      <span
        className="bg-red-500 w-fit h-fit text-center p-3 cursor-pointer text-amber-900 font-bold border rounded-md border-0"
        onClick={handleClose}
      >
        close
      </span>
    </div>
  );
}

export default Instructions;
