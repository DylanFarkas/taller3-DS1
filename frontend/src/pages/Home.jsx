import { Link } from "react-router-dom";
import Stats from "../components/stats/Stats";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
      <Stats />
    </div>
  );
}
