import RECOUNT_DATA from "../data/recountData";

export function calculateTotals() {
  let totalMirza = 0;
  let totalPatowary = 0;
  let completedBooths = 0;

  RECOUNT_DATA.booths.forEach((booth) => {
    totalMirza += booth.mirza;
    totalPatowary += booth.patowary;
    if (booth.status === "counted") completedBooths++;
  });

  return {
    totalMirza,
    totalPatowary,
    totalVotes: totalMirza + totalPatowary,
    diff: Math.abs(totalMirza - totalPatowary),
    completedBooths,
    totalBooths: RECOUNT_DATA.booths.length,
  };
}

export function formatNumber(num) {
  return num.toLocaleString("en-IN");
}

export function getPercentage(part, total) {
  if (total === 0) return "50.0";
  return ((part / total) * 100).toFixed(1);
}
