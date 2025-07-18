import ScoreCard from "./ScoreCard";
import { usePageSpeed } from "../../Services/pageSpeedStore";

function LabVitals() {
const { data } = usePageSpeed();
if(!data || !data.lighthouseResult) {
    return <></>;
}
    return (
       <div className="text-white  w-full flex flex-col px-40 py-5 h-fit flex-wrap">
       
        <div className="flex gap-8 h-full flex-wrap">
          <ScoreCard category="Time to First Byte" scoreData={data.lighthouseResult.audits['server-response-time'].numericValue + ` ms`}
          about="he time from the initial request of a page until the first byte of the response is received by the browser. It includes DNS lookup, TCP connection, TLS negotiation, and the server's processing time to generate and send the response." goodScore="≤ 800 milliseconds"></ScoreCard>

          <ScoreCard category="First Contentful Paint" scoreData={data.lighthouseResult.audits['first-contentful-paint'].displayValue}
          about="The time from when the page starts loading until any part of the page's content is rendered on the screen. This could be text, images, non-white <canvas> elements, or SVGs." goodScore="≤ 1.8 seconds"></ScoreCard>

          <ScoreCard category="Speed Index" scoreData={data.lighthouseResult.audits['speed-index'].displayValue}
          about="Measures how quickly content is visually displayed during page load. It quantifies the visual progression of the page loading by calculating the average time at which visible parts of the page are displayed." goodScore="≤ 3.4 seconds"></ScoreCard>

          <ScoreCard category="Total Blocking TIme" scoreData={data.lighthouseResult.audits['total-blocking-time'].displayValue}
          about="The sum of all time periods between First Contentful Paint (FCP) and Time to Interactive (TTI) where the main thread was blocked for long enough to prevent input responsiveness (i.e., tasks lasting longer than 50 milliseconds)." goodScore="≤ 200 milliseconds"></ScoreCard>
          
        </div>
        
       </div>
    )
}
export default LabVitals;