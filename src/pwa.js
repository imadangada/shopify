import pwa from './pwa.svg'

function Pwa() {
  return (
    <div className="relative bg-amber-50 overflow-hidden">
        <main className="mt-16 sm:mt-24 lg:mx-20">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                <div>
                <span className="md:block ">PAY ONCE, USE LIFETIME</span>
                  <h1 className="mt-4 text-4xl tracking-tight text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-6xl xl:text-6xl">
                    
                    <span className="text-green-900 md:block">Getting your<br />
                     products sold on<br /> the easy.</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Sell your products online, and turn your social media accounts into marketing channels.
                  </p>
                  <div className='mt-6'></div>
                  <button className='py-2 w-24 bg-amber-50 text-green-900 border border-green-900 hover:bg-green-900 hover:text-amber-100'>
                    Buy Now
                  </button>
                  <p className="mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10"></p>
                  <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                    <div className="flex flex-wrap items-start justify-between">
                      <div className="flex justify-center px-1">
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                <div>
                  <div className="px-4 py-8 sm:px-10">
                    <div>
                     <img src={pwa} />
                </div>
              </div>
              </div>
              </div>
              </div>
        </main>
        </div>
  )
}
export default Pwa;