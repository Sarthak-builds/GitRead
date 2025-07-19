import MetricHeading from "./Dashboard/MertricHeading";
import ScoreBoard from "./Dashboard/ScoreBoard";
import WebVitals from "./Dashboard/WebVitals";
import LabVitals from "./Dashboard/LabVitals";
import {motion} from 'motion/react'
import Screenshot from "./Dashboard/Screenshot";
function Display() {



    return (
       <>
         <MetricHeading heading="Overall Health Scorecard" description=" The Overall Health Scorecard serves as the executive summary of your website's performance and quality. It provides an immediate, high-level overview, allowing developers and stakeholders to grasp the general health of the page at a single glance without diving into granular details."></MetricHeading>
    <Screenshot></Screenshot>
     <ScoreBoard></ScoreBoard>
     <MetricHeading heading="Core Web Vitals Status" description="This section focuses on Google's most important user-centric performance metrics, which are now key ranking signals. It's designed to give a precise understanding of the page's loading speed, interactivity, and visual stability from both real users and simulated tests."></MetricHeading>
     <WebVitals></WebVitals>
     <MetricHeading heading="Key Lab Performance Metrics" description="This section details specific metrics collected in the Lighthouse lab environment that provide granular diagnostic insights into different phases of your page's loading and interactivity. While they might not be Core Web Vitals themselves, they are often root causes of poor CWV scores."></MetricHeading>
     <LabVitals></LabVitals>
      </>
    )
}
export default Display;