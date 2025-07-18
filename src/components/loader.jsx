

function LoaderAnimation() {

    return (
        <div className="flex space-x-3 items-center justify-center animate-bounce">
      <div className="h-8 w-8 bg-green-600 rounded-full animate-bounce"></div>
      <div className="h-6 w-6 bg-green-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
      <div className="h-8 w-8 bg-green-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
    </div>
    )
}
export default LoaderAnimation;