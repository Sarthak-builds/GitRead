import { usePageSpeed } from "../../Services/pageSpeedStore";

function MetricHeading({heading, description}) {
const { data } = usePageSpeed();
if (!data || !data.lighthouseResult || !data.lighthouseResult.categories) {
    return <></>;
  }

    return (
        
        <div className="text-white w-fit px-40   text-lg my-10  flex flex-col gap-3 font-grotesk ">
            <h1 className="bg-green-500/50  px-3 text-2xl rounded-lg w-fit ">{heading}</h1>
            <p className="text-md ">{description}</p>
        </div>
    )
}

export default MetricHeading;