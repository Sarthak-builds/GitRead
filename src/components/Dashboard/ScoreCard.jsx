function ScoreCard({category, scoreData}) {
 if (!scoreData) {
    return <div className="bg-red-700 w-full h-full">Loading data...</div>;
  }

    return (
        <div className="w-full h-full bg-green-900">
            <h1>{category}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta recusandae animi facilis deleniti excepturi atque impedit eum a nisi quam accusamus laudantium omnis nemo molestiae molestias pariatur, reiciendis rerum. Molestias.</p>
            <div>Score : {scoreData}</div>
        </div>
    )
}

export default ScoreCard;