import { memo } from "react";
import { formatNumber, getPercentage } from "../../utils/helpers";
import "./BoothCard.css";

const BoothCard = memo(function BoothCard({ booth }) {
  const boothTotal = booth.mirza + booth.patowary;
  const mirzaW = getPercentage(booth.mirza, boothTotal);
  const patowaryW = getPercentage(booth.patowary, boothTotal);

  return (
    <div className="booth-card">
      <div className="booth-header">
        <div className="booth-name">{booth.name}</div>
        <div className={`booth-status ${booth.status}`}>
          {booth.status === "counted" ? "✓ Counted" : "⏳ Pending"}
        </div>
      </div>

      <div className="booth-votes">
        <div className="booth-vote mirza-side">
          <div className="bv-name">Mirza Abbas</div>
          <div className="bv-count mirza-text">{formatNumber(booth.mirza)}</div>
        </div>
        <div className="booth-vote patowary-side">
          <div className="bv-name">Patowary</div>
          <div className="bv-count patowary-text">
            {formatNumber(booth.patowary)}
          </div>
        </div>
      </div>

      <div className="booth-mini-bar">
        <div className="booth-mini-mirza" style={{ width: `${mirzaW}%` }} />
        <div className="booth-mini-patowary" style={{ width: `${patowaryW}%` }} />
      </div>
    </div>
  );
});

export default BoothCard;
