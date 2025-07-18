import ScoreCard from "./ScoreCard";
import { usePageSpeed } from "../../Services/pageSpeedStore";

function Screenshot() {
const { data } = usePageSpeed();
if (!data || !data.lighthouseResult || !data.lighthouseResult.categories) {
    return <></>;
  }

    return (
        <div className="flex gap-3 w-full px-40 h-80 pt-10 items-center">
        <ScoreCard category="Performance" scoreData={data.lighthouseResult.categories.performance.score*100}
        about="Measures how fast your page loads and becomes interactive, reflecting the user's perceived speed."
        goodScore="90-100"

        ></ScoreCard>
          <div className="w-fit h-full overflow-hidden shadow-md shadow-green-500/20 rounded-lg">
             <img 
            src={`${data.lighthouseResult.fullPageScreenshot?.screenshot?.data}`} 
            alt="Website Screenshot" 
            className="w-300 h-full  rounded-xl object-cover object-top" 
          />
          </div>

        </div>
    )
}

export default Screenshot;