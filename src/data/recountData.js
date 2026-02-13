// ============================================================
//   📌 EDIT VOTE COUNTS HERE — Update manually as recount progresses
// ============================================================

const RECOUNT_DATA = {
  lastUpdated: "February 13, 2026 — 10:00 AM",

  candidates: {
    candidate1: {
      name: "Mirza Abbas",
      shortName: "MA",
      party: "BNP Candidate",
    },
    candidate2: {
      name: "Patowary",
      shortName: "P",
      party: "Candidate",
    },
  },

  // Add / edit booth-wise results below
  // status: "counted" or "pending"
  booths: [
    { name: "Booth 01 — Dhanmondi Govt. School",   mirza: 1250, patowary: 1180, status: "counted" },
    { name: "Booth 02 — Lalmatia Girls' School",    mirza: 980,  patowary: 1020, status: "counted" },
    { name: "Booth 03 — Jigatola Community Center", mirza: 1100, patowary: 1050, status: "counted" },
    { name: "Booth 04 — Shankar Model School",      mirza: 870,  patowary: 910,  status: "counted" },
    { name: "Booth 05 — Hajaribag Primary School",  mirza: 1320, patowary: 1280, status: "counted" },
    { name: "Booth 06 — Rayerbazar High School",    mirza: 0,    patowary: 0,    status: "pending" },
    { name: "Booth 07 — Mohammadpur Club",          mirza: 0,    patowary: 0,    status: "pending" },
    { name: "Booth 08 — Adabar Community Hall",     mirza: 0,    patowary: 0,    status: "pending" },
  ],
};

export default RECOUNT_DATA;
