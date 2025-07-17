import ScoreCard from "./ScoreCard";
import { usePageSpeed } from "../../Services/pageSpeedStore";


function ScoreBoard() {
const {data} = usePageSpeed();
 if (!data || !data.lighthouseResult || !data.lighthouseResult.categories) {
    return <div className="bg-red-700 w-full h-full">Loading data...</div>;
  }

    return (
        <div className="w-full h-fit px-40 gap-7 flex py-5">
            <ScoreCard category="Search Engine Optimization" scoreData={data.lighthouseResult.categories.seo.score*100} about="Checks for basic search engine optimization principles to ensure your page is discoverable and understood by search engines."></ScoreCard>
            <ScoreCard category="Accessibility" scoreData={data.lighthouseResult.categories.accessibility.score*100}
            about="Assesses if your website is usable by everyone, including people with disabilities, by checking for common accessibility issues."></ScoreCard>
            <ScoreCard category="Best Practices Used" scoreData={data.lighthouseResult.categories["best-practices"].score*100}
            about="Evaluates adherence to modern web standards, security, and overall code quality for a robust and maintainable site."></ScoreCard>
           
        </div>
    )
}
export default ScoreBoard;