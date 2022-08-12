import logo from './left.svg'
import right from './right.svg'
function Subfooter() {
  return (
    <footer className="bg-teal-900" aria-labelledby="footer-heading">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        
          <h2 className="text-3xl lg:text-5xl text-white sm:text-4xl">
            <span className="block">We can take care of the<br /> installation</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-white">
          Don’t want to deal with technical stuff? Let us fire 
          up Uvodo for you, so you can spend your time selling 
          right away.
          </p>
        </div>
        <div className="mt-2 flex justify-center text-center">
        <button
          type="submit"
          className="flex justify-center block w-40 py-3 px-4 rounded-md shadow bg-white text-green-900 font-medium hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
        >
          Contact Us
        </button>
      </div>
      <div className="mt-12 border-t border-gray-200 pt-8">
          
        </div>
      </footer>
      
  )
}
export default Subfooter;