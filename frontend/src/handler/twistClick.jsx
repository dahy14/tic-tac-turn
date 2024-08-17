export function TwistClick({ twistToggle, setTwistToggle }) {
  const handleTwistClick = () => {
    if (twistToggle) {
      setTwistToggle(false);
    } else {
      setTwistToggle(true);
    }
  };
  return {
    handleTwistClick,
  };
}
