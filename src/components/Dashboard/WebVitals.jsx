import ScoreCard from "./ScoreCard";
import { usePageSpeed } from "../../Services/pageSpeedStore";

function WebVitals() {
const { data } = usePageSpeed();
if(!data || !data.loadingExperience){
    return <></>;
}
    return (
       <div className="text-white  w-full flex flex-col px-40 py-5 gap-4 h-fit font-grotesk">
        <h1 className="text-lg bg-green-400/40 w-fit px-4 py-1 rounded-lg font-grotesk">For the Entire Website </h1>
        <div className="flex gap-4 h-full rounded-lg py-1 px-2 flex-wrap">
          <ScoreCard category="CLS : Cumulative Layout Shift" scoreData={data.originLoadingExperience.metrics.CUMULATIVE_LAYOUT_SHIFT_SCORE.category}
          about=" CLS measures the visual stability of a webpage. It quantifies the amount of unexpected layout shifts that occur during the entire lifespan of a page. An unexpected layout shift happens when a visible element on the page changes its position (e.g., text moving down, a button appearing and pushing content) without being directly triggered by a user interaction." ></ScoreCard>
          <ScoreCard category="LCP : Largest Contentful Paint" scoreData={data.originLoadingExperience.metrics.LARGEST_CONTENTFUL_PAINT_MS
.category}
about="LCP measures loading performance. It reports the render time of the largest image or text block visible within the user's viewport . Essentially, it tells you how long it takes for the main content of your page to become visible to the user" ></ScoreCard>
         
          <ScoreCard category="TTFB : Time to First Byte" scoreData={data.originLoadingExperience.metrics.EXPERIMENTAL_TIME_TO_FIRST_BYTE
.category}
about="TTFB measures the responsiveness of a web server or other network resource. It's the time duration from the user's browser making an HTTP request to the first byte of the page being received by the client's browser." ></ScoreCard>
         
          <ScoreCard category="FCP : First Contentful Paint" scoreData={data.originLoadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS
.category}
about=" FCP measures the loading performance and marks the time when the first piece of content from the DOM (Document Object Model) is rendered on the screen. This could be text, an image, a non-white SVG, or a <canvas> element. It's the point at which the user sees something on the page, indicating that it's starting to load." ></ScoreCard>
         
          <ScoreCard category="INP : Interaction to Next Paint" scoreData={data.originLoadingExperience.metrics.INTERACTION_TO_NEXT_PAINT.category}
          about="INP is a Core Web Vital that measures interactivity and responsiveness. It assesses the total latency of all user interactions with a page. For a given page, it reports a single value that is the longest duration of an interaction observed on the page (excluding outliers). An 'interaction' can be a click, tap, or keyboard input. The 'latency' is the time from when the user initiates the interaction to when the browser paints the next frame after the interaction's callback functions have run." ></ScoreCard>
        </div>
       </div>
    )
}
export default WebVitals;