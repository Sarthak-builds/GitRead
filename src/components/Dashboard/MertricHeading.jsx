

function MetricHeading({heading, description}) {


    return (
        <div className="text-white w-fit px-40   text-lg my-10  flex flex-col gap-3 font-grotesk ">
            <h1 className="bg-green-500/50  px-3 text-2xl tracking-wider rounded-lg w-fit font-pixel ">{heading}</h1>
            <p className="text-md ">{description}</p>
        </div>
    )
}

export default MetricHeading;