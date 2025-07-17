import ScoreCard from "./ScoreCard";
import { usePageSpeed } from "../../Services/pageSpeedStore";

function Screenshot() {
const { data } = usePageSpeed();
if (!data || !data.lighthouseResult || !data.lighthouseResult.categories) {
    return <div className="bg-red-700 w-full h-full">Loading data...</div>;
  }

    return (
        <div className="flex gap-3 w-full px-40 h-fit pt-10 items-center">
        <ScoreCard category="Performance" scoreData={data.lighthouseResult.categories.performance.score*100}
        about="Measures how fast your page loads and becomes interactive, reflecting the user's perceived speed."
        ></ScoreCard>
          <div className="w-fit h-60 overflow-hidden shadow-md shadow-green-500/20 rounded-lg">
             <img 
            src={`${data.lighthouseResult.fullPageScreenshot?.screenshot?.data}`} 
            alt="Website Screenshot" 
            className="w-300 h-full  rounded-xl object-cover" 
          />
          </div>

        </div>
    )
}

export default Screenshot;