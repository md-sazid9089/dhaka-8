import { getPercentage } from "../../utils/helpers";
import "./ProgressBar.css";

export default function ProgressBar({ totalMirza, totalPatowary }) {
  const total = totalMirza + totalPatowary;
  const mirzaPct = getPercentage(totalMirza, total);
  const patowaryPct = getPercentage(totalPatowary, total);

  return (
    <div className="progress-section">
      <div className="progress-bar-container">
        <div className="progress-labels">
          <span className="mirza">Mirza Abbas</span>
          <span className="patowary">Patowary</span>
        </div>
        <div className="progress-track">
          <div
            className="progress-fill-mirza"
            style={{ width: `${mirzaPct}%` }}
          >
            {mirzaPct}%
          </div>
          <div
            className="progress-fill-patowary"
            style={{ width: `${patowaryPct}%` }}
          >
            {patowaryPct}%
          </div>
        </div>
      </div>
    </div>
  );
}
