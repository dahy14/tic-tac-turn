function ResetButton({ resetClick }) {
  return (
    <button
      className="bg-yellow-700 text-white p-2 rounded-md"
      onClick={() => resetClick()}
    >
      Reset
    </button>
  );
}

export default ResetButton;
