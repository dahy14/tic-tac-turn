import TicTacToe from "./TicTacToe.jsx";

import ResetButton from "./ResetButton.jsx";
function GameScreen() {
  return (
    <>
      <div className="h-screen w-screen bg-amber-900 flex justify-center items-center flex-col gap-2 ">
        <TicTacToe />

        <ResetButton />
      </div>
    </>
  );
}

export default GameScreen;
