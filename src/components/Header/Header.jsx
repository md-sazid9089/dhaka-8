import headerBg from "../../assets/header.jpeg";
import "./Header.css";

export default function Header() {
  return (
    <div
      className="header"
      style={{ backgroundImage: `url(${headerBg})` }}
    >
      <div className="badge">🔴 Live Recount</div>
      <h1>DHAKA-8</h1>
      <div className="constituency">
        Parliamentary Constituency — Vote Recount 2026
      </div>
      <div className="bengali">ঢাকা-৮ আসন — ভোট পুনঃগণনা</div>
    </div>
  );
}
