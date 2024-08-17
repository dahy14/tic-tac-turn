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

  const { x, y, xRef, yRef } = posState;
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

  checkWinner({ ...tileState, ...playerState });

  useEffect(() => {
    console.log("tileRef: ", tileRef.current);
    console.log("xRef: ", xRef.current);
    console.log("yRef: ", yRef.current);
  }, [tileRef.current, xRef.current, yRef.current]);

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
              tileClick={twistToggle ? handleAlterClick : handleTileClick}
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
