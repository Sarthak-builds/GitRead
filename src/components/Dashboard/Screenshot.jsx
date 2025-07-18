import ScoreCard from "./ScoreCard";
import { usePageSpeed } from "../../Services/pageSpeedStore";

function Screenshot() {
const { data } = usePageSpeed();
if (!data || !data.lighthouseResult || !data.lighthouseResult.categories) {
    return <></>;
  }

    return (
        <div className="flex gap-3 w-full px-4 sm:px-15 md:px-25 lg:px-40 xl:px-40 h-fit flex-col lg:flex-row pt-10 items-center justify-center ">
        <ScoreCard category="Performance" scoreData={data.lighthouseResult.categories.performance.score*100}
        about="The Performance score assesses the overall speed and responsiveness of your webpage. It measures how quickly the content appears on the screen, how fast it becomes usable, and how smoothly it responds to user interactions. Essentially, it reflects the user's perceived loading experience."
        goodScore="90-100"

        ></ScoreCard>
          <div className="w-fit h-50 sm:h-70 overflow-hidden shadow-md shadow-green-500/20 rounded-lg">
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