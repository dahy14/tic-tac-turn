import { useState, useEffect } from "react";
import ResetButton from "./ResetButton";
import Tile from "./Tile";

import TwistButton from "./TwistButton";
import { useTTT } from "./Logic/useTTT";
import { usePosition } from "./Logic/usePos";

import { useMainHook } from "./Logic/useMainHook";

function TicTacToe() {
  // states
  const stateHooks = useTTT();
  const pos = usePosition();
  const { tile, winner, twistToggle, winningBlock } = stateHooks;
  const { x, y } = pos;
  // click handlers
  const { handleTileClick, handleTwistClick, handleResetClick } = useMainHook({
    ...stateHooks,
    ...pos,
  });

  return (
    <>
      <h1 className="text-4xl text-white font-bold uppercase ">Tic Tac Turn</h1>
      {/* creates the board */}
      <div className="grid grid-cols-3 grid-rows-3 relative ">
        {tile.map((tileValue, index) => {
          return (
            <Tile
              textVal={tileValue}
              idx={index}
              key={index}
              tileClick={handleTileClick}
              winningBlock={
                tileValue && winningBlock.includes(index) ? true : false
              }
              x={x[index]}
              y={y[index]}
            />
          );
        })}
      </div>
      <h2
        className={`text-4xl font-bold text-green-400 ${
          winner === null ? "hidden" : ""
        }`}
      >
        Winner is {winner}
      </h2>

      <div className="flex justify-center items-center">
        <TwistButton toggle={twistToggle} twistClick={handleTwistClick} />
        <ResetButton resetClick={handleResetClick} />
      </div>
    </>
  );
}

export default TicTacToe;
