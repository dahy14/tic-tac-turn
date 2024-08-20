import ResetButton from "./ResetButton";
import Tile from "./Tile";
import TwistButton from "./TwistButton";

import { ResetClick } from "./handler/resetClick";
import { TwistButtonClick, AlterClick } from "./handler/twistClick";
import { TileClick } from "./handler/tileClick";
import {
  usePlayer,
  usePosition,
  useTile,
  useTwistState,
} from "./hooks/mainHooks";
import { useEffect } from "react";
import { checkWinner } from "./handler/checkWinner";

function TicTacToe() {
  const playerState = usePlayer();
  const posState = usePosition();
  const tileState = useTile();
  const twistState = useTwistState();

  const { x, y, setX, setY } = posState;
  const { tile, tileRef, winningBlock } = tileState;
  const { twistToggle } = twistState;
  const { player, winner, playerRef } = playerState;

  const { handleResetClick } = ResetClick({
    ...tileState,
    ...playerState,
    ...posState,
    ...twistState,
  });
  const { handleTileClick } = TileClick({
    ...tileState,
    ...playerState,
    ...twistState,
  });
  const { handleTwistClick } = TwistButtonClick({
    ...twistState,
    ...playerState,
  });
  const { handleAlterClick } = AlterClick({
    ...twistState,
    ...tileState,
    ...posState,
    ...playerState,
  });
  //initPosition({ ...posState });
  checkWinner({ ...tileState, ...playerState });
  const xInit = [...x];
  const yInit = [...y];

  useEffect(() => {
    console.log("tile ref", tileRef.current);
  });

  return (
    <>
      <h1 className="text-4xl text-white font-bold uppercase  ">
        Tic Tac Turn
      </h1>
      {/* creates the board */}
      <div className=" min-w-36 min-h-36 relative">
        {tile.map((tileValue, index) => {
          return (
            <Tile
              textVal={tileValue} // X or O
              idx={index} // 0-8
              key={index} // 0-8
              tileClick={twistToggle ? handleAlterClick : handleTileClick}
              winningBlock={
                tileValue && winningBlock.includes(index) ? true : false
              } // winning block
              x={x[index]} // x position
              y={y[index]} // y position
              xInit={xInit[index]} // initial x position
              yInit={yInit[index]} // initial y position
            />
          );
        })}
      </div>
      <h2
        className={`text-2xl font-bold text-green-400 transition-all duration-700 ${
          winner === null ? "opacity-0" : "opacity-100"
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
