import { memo } from "react";
import "./Footer.css";

const Footer = memo(function Footer() {
  return (
    <div className="footer">
      <div className="disclaimer">
        ⚠ Unofficial Recount Tracker — For Informational Purposes Only
      </div>
      <div>Dhaka-8 Parliamentary Constituency Vote Recount 2026</div>
    </div>
  );
});

export default Footer;
