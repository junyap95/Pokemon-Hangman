import { useSelector } from "react-redux";

export default function CatchCount() {
  const catchCount = useSelector((state) => state.guesses.catchCounter);

  return <div style={{ fontSize: "0.8em", color: "#f5f5f5" }}>Catch Streak: {catchCount}</div>;
}
