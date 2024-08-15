import { useState, useEffect } from "react";
import ResetButton from "./ResetButton";
import Tile from "./Tile";

function TicTacToe() {
  const [tile, setTile] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [winningBlock, setWinningBlock] = useState(Array(3).fill(null));

  const handleTileClick = (idx) => {
    if (tile[idx] || winner) {
      return;
    }
    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
    const newTile = [...tile];

    newTile[idx] = player;
    setTile(newTile);
    // check winner /////////////////////////////////////////////

    const allWinningCombination = [
      // horizontal
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // vertical
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // diagonal
      [0, 4, 8],
      [2, 4, 6],
    ];

    allWinningCombination.forEach((combination) => {
      const [x, y, z] = combination;
      if (
        newTile[x] &&
        newTile[x] === newTile[y] &&
        newTile[x] === newTile[z]
      ) {
        setWinner(player);
        setWinningBlock(combination);
      }
    });
  };

  const handleResetClick = () => {
    setTile(Array(9).fill(null));
    setPlayer("X");
    setWinner(null);
    setWinningBlock(Array(3).fill(null));
  };

  useEffect(() => {
    console.log(tile);
  }, [tile]);

  return (
    <>
      <h1 className="text-4xl text-white font-bold uppercase"> Tic Tac Toe </h1>

      {/* creates the board */}
      <div className="grid grid-cols-3 grid-rows-3">
        {tile.map((tileValue, index) => {
          return (
            <Tile
              value={tileValue}
              idx={index}
              key={index}
              tileClick={handleTileClick}
              winningBlock={
                tileValue && winningBlock.includes(index) ? true : false
              }
            />
          );
        })}
      </div>

      <h2 className={`text-4xl font-bold text-green-400 ${winner === null ? "hidden" : ""}`}>
        {" "}
        Winner is {winner}
      </h2>

      <ResetButton resetClick={handleResetClick} />
    </>
  );
}

export default TicTacToe;
