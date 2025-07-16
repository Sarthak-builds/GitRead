import ScoreCard from "./ScoreCard";
import { usePageSpeed } from "../../Services/pageSpeedStore";


function ScoreBoard() {
const {data} = usePageSpeed();
 if (!data || !data.lighthouseResult || !data.lighthouseResult.categories) {
    return <div className="bg-red-700 w-full h-full">Loading data...</div>;
  }

    return (
        <div className="w-full h-60 px-60 gap-5 flex py-5">
            <ScoreCard category="SEO" scoreData={data.lighthouseResult.categories.seo.score*100}></ScoreCard>
            <ScoreCard category="accessibility" scoreData={data.lighthouseResult.categories.accessibility.score*100}></ScoreCard>
            <ScoreCard category="Best practices Used" scoreData={data.lighthouseResult.categories["best-practices"].score*100}></ScoreCard>
           
        </div>
    )
}
export default ScoreBoard;