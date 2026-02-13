import RECOUNT_DATA from "../../data/recountData";
import BoothCard from "../BoothCard/BoothCard";
import "./BoothGrid.css";

export default function BoothGrid() {
  return (
    <div className="booth-section">
      <h2>📊 Booth-wise Breakdown</h2>
      <div className="booth-grid">
        {RECOUNT_DATA.booths.map((booth, index) => (
          <BoothCard key={index} booth={booth} />
        ))}
      </div>
    </div>
  );
}
