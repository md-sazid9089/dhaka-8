import { formatNumber } from "../../utils/helpers";
import "./StatsBar.css";

export default function StatsBar({ totalVotes, diff, completedBooths, totalBooths, lastUpdated }) {
  return (
    <>
      <div className="stats-bar">
        <div className="stat-item">
          <div className="label">Total Votes Counted</div>
          <div className="value">{formatNumber(totalVotes)}</div>
        </div>
        <div className="stat-item">
          <div className="label">Vote Difference</div>
          <div className="value">{formatNumber(diff)}</div>
        </div>
        <div className="stat-item">
          <div className="label">Booths Completed</div>
          <div className="value">
            {completedBooths} / {totalBooths}
          </div>
        </div>
      </div>
      <div className="last-updated">
        Last Updated: <span>{lastUpdated}</span>
      </div>
    </>
  );
}
