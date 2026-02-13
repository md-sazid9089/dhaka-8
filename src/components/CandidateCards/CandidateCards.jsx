import { formatNumber } from "../../utils/helpers";
import RECOUNT_DATA from "../../data/recountData";
import "./CandidateCards.css";

export default function CandidateCards({ totalMirza, totalPatowary }) {
  const { candidate1, candidate2 } = RECOUNT_DATA.candidates;
  const mirzaLeading = totalMirza > totalPatowary;
  const patowaryLeading = totalPatowary > totalMirza;

  return (
    <div className="candidates">
      {/* Mirza Abbas */}
      <div className={`candidate-card mirza ${mirzaLeading ? "leading" : ""}`}>
        <div className="leading-badge">✦ LEADING</div>
        <div className="avatar mirza-bg">{candidate1.shortName}</div>
        <div className="candidate-name">{candidate1.name}</div>
        <div className="candidate-party">{candidate1.party}</div>
        <div className="vote-count mirza-text">{formatNumber(totalMirza)}</div>
        <div className="vote-label">Votes</div>
      </div>

      {/* VS */}
      <div className="vs-divider">
        <div className="vs-circle">VS</div>
      </div>

      {/* Patowary */}
      <div className={`candidate-card patowary ${patowaryLeading ? "leading" : ""}`}>
        <div className="leading-badge">✦ LEADING</div>
        <div className="avatar patowary-bg">{candidate2.shortName}</div>
        <div className="candidate-name">{candidate2.name}</div>
        <div className="candidate-party">{candidate2.party}</div>
        <div className="vote-count patowary-text">{formatNumber(totalPatowary)}</div>
        <div className="vote-label">Votes</div>
      </div>
    </div>
  );
}
