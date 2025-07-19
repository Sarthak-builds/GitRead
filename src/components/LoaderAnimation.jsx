

function LoaderAnimation() {

    return (
        <div className="flex space-x-3 items-center justify-center animate-bounce">
      <div className="h-4 w-4 sm:h-5 sm:w-5 md:h-7 md:w-7 bg-green-600 rounded-full animate-bounce"></div>
      <div className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 bg-green-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
      <div className="h-4 w-4 sm:h-5 sm:w-5 md:h-7 md:w-7 bg-green-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
    </div>
    )
}
export default LoaderAnimation;