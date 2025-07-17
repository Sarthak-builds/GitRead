function ScoreCard({category, scoreData, about}) {
 if (!scoreData) {
    return <div className="bg-red-700 w-full h-full">Loading data...</div>;
  }

    return (
        <div className="w-full h-full min-h-60 max-w-140 px-5 py-3 text-white flex flex-col gap-3 border-2 border-green-600/30 rounded-lg">
            <h1 className="text-2xl font-semibold text-green-500">{category}</h1>
            <p className="text-gray-300">{about}</p>
            <div className="text-xl font-semibold">SCORE: <span className="text-2xl text-green-500">{scoreData}</span></div>
        </div>
    )
}

export default ScoreCard;