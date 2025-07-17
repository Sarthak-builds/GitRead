import ScoreCard from "./ScoreCard";
import { usePageSpeed } from "../../Services/pageSpeedStore";

function LabVitals() {
const { data } = usePageSpeed();
if(!data || !data.lighthouseResult) {
    return <div className="w-full bg-blue-400">...is loading</div>
}
    return (
       <div className="text-white  w-full flex flex-col px-40 py-5 h-80 gap-10">
        <h1>Key Lab Performance Metrics</h1>
        <div className="flex gap-2 h-full">
          <ScoreCard category="Time to First Byte" scoreData={data.lighthouseResult.audits['server-response-time'].numericValue}></ScoreCard>

          <ScoreCard category="First Contentful Paint" scoreData={data.lighthouseResult.audits['first-contentful-paint'].numericValue}></ScoreCard>

          <ScoreCard category="Speed Index" scoreData={data.lighthouseResult.audits['speed-index'].numericValue}></ScoreCard>

          <ScoreCard category="TOtal Blocking TIme" scoreData={data.lighthouseResult.audits['total-blocking-time'].numericValue}></ScoreCard>
          
        </div>
        
       </div>
    )
}
export default LabVitals;