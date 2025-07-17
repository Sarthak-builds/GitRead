

function MetricHeading({heading, description}) {


    return (
        <div className="text-white w-fit px-40   text-lg my-10  flex flex-col gap-3">
            <h1 className="bg-green-500/70 py-1 px-3 text-xl rounded-lg w-fit">{heading}</h1>
            <p className="text-base">{description}</p>
        </div>
    )
}

export default MetricHeading;