import headerBg from "../../assets/header.jpeg";
import { FaCircle } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  return (
    <div
      className="header"
      style={{ backgroundImage: `url(${headerBg})` }}
    >
      <div className="badge"><FaCircle className="live-dot" /> Live Recount</div>
      <h1>DHAKA-8</h1>
      <div className="constituency">
        Parliamentary Constituency — Vote Recount 2026
      </div>
      <div className="bengali">ঢাকা-৮ আসন — ভোট পুনঃগণনা</div>
    </div>
  );
}
