

function LoaderAnimation() {

    return (
        <div className="flex space-x-3 items-center justify-center animate-bounce">
      <div className="h-2 w-2 sm:h-3 sm:w-3 md:h-4 md:w-4 bg-green-600 rounded-full animate-bounce"></div>
      <div className="h-2 w-2 sm:h-3 sm:w-3 md:h-4 md:w-4 bg-green-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
      <div className="h-2 w-2 sm:h-3 sm:w-3 md:h-4 md:w-4 bg-green-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
    </div>
    )
}
export default LoaderAnimation;