import { memo } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import "./Footer.css";

const Footer = memo(function Footer() {
  return (
    <div className="footer">
      <div className="disclaimer">
        <FiAlertTriangle style={{ verticalAlign: 'middle', marginRight: 6 }} />
        Unofficial Recount Tracker — For Informational Purposes Only
      </div>
      <div>Dhaka-8 Parliamentary Constituency Vote Recount 2026</div>
      <div className="credit">Developed by Reduanul Islam Maruf</div>
    </div>
  );
});

export default Footer;
