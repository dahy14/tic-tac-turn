function Tile({ value, idx, tileClick, winningBlock }) {
  return (
    <div
      className={`w-12 h-12 bg-gray-100 border border-black text-violet-700 font-bold text-4xl flex justify-center items-center cursor-pointer ${
        winningBlock ? "bg-yellow-300" : ""
      }`}
      id={idx}
      onClick={() => tileClick(idx)}
    >
      {value}
    </div>
  );
}

export default Tile;
