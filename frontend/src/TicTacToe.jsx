import { useState } from "react";
import Tile from "./Tile";

function TicTacToe() {
  const [tile, setTile] = useState(Array(9).fill(null));

  const [winner, setWinner] = useState("Colet");
  return (
    <>
      <h1 className="text-4xl font-bold uppercase"> Tic Tac Toe </h1>

      {/* creates the board */}
      <div className="grid grid-cols-3 grid-rows-3">
        {tile.map((tileValue, index) => {
          console.log(index, tileValue);
          return <Tile value={tileValue} idx={index} key={index} />;
        })}
      </div>

      <h2 className="text-base hidden"> Winner is {winner}</h2>
    </>
  );
}

export default TicTacToe;
