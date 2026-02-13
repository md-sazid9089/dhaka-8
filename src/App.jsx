import RECOUNT_DATA from "./data/recountData";
import { calculateTotals } from "./utils/helpers";
import Header from "./components/Header/Header";
import StatsBar from "./components/StatsBar/StatsBar";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import CandidateCards from "./components/CandidateCards/CandidateCards";
import BoothGrid from "./components/BoothGrid/BoothGrid";
import Footer from "./components/Footer/Footer";

function App() {
  const { totalMirza, totalPatowary, totalVotes, diff, completedBooths, totalBooths } =
    calculateTotals();

  return (
    <div className="container">
      <Header />
      <StatsBar
        totalVotes={totalVotes}
        diff={diff}
        completedBooths={completedBooths}
        totalBooths={totalBooths}
        lastUpdated={RECOUNT_DATA.lastUpdated}
      />
      <ProgressBar totalMirza={totalMirza} totalPatowary={totalPatowary} />
      <CandidateCards totalMirza={totalMirza} totalPatowary={totalPatowary} />
      <BoothGrid />
      <Footer />
    </div>
  );
}

export default App;
