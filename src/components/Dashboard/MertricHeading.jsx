import { usePageSpeed } from "../../Services/pageSpeedStore";

function MetricHeading({heading, description}) {
const { data } = usePageSpeed();
if (!data || !data.lighthouseResult || !data.lighthouseResult.categories) {
    return <></>;
  }

    return (
        
        <div className="text-white w-fit px-5 sm:px-15 md:px-40  text-lg my-10  items-center sm:items-start text-center sm:text-start flex flex-col gap-3 font-grotesk  ">
            <h1 className="bg-green-500/50  px-3 text-base sm:text-xl  rounded-lg w-fit ">{heading}</h1>
            <p className=" text-sm sm:text-lg ">{description}</p>
        </div>
    )
}

export default MetricHeading;