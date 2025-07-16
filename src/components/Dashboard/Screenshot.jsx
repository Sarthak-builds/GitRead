import ScoreCard from "./ScoreCard";
import { usePageSpeed } from "../../Services/pageSpeedStore";

function Screenshot() {
const { data } = usePageSpeed();
if (!data || !data.lighthouseResult || !data.lighthouseResult.categories) {
    return <div className="bg-red-700 w-full h-full">Loading data...</div>;
  }

    return (
        <div className="flex gap-3 bg-red-100 w-full px-60 h-60">
        <ScoreCard category="Performance" scoreData={data.lighthouseResult.categories.performance.score*100}></ScoreCard>
          <div className="w-fit h-full bg-red-900 overflow-hidden">
             <img 
            src={`${data.lighthouseResult.fullPageScreenshot?.screenshot?.data}`} 
            alt="Website Screenshot" 
            className="w-200 h-auto object-contain border border-gray-300 rounded" 
          />
          </div>

        </div>
    )
}

export default Screenshot;