function Tile({ value, idx }) {
  return (
    <div className="w-12 h-12 bg-gray-100 border border-black" id={idx}>
      {" "}
      {value}
    </div>
  );
}

export default Tile;
