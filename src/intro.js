import Cards from "./cards";

/* This example requires Tailwind CSS v2.0+ */
function Intro() {
    return (
      <div className="bg-amber-100">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <p className="mt-4 text-lg leading-6 text-green-900">
        360° CUSTOMIZABLE
          </p>
          <h2 className="text-3xl lg:text-4xl text-green-900 sm:text-4xl">
            <span className="block">Have full control over your online store</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-700">
          Take total control of your eCommerce business by owning the 
          source code and data that drive it.
          </p>
        </div>
<Cards />

      </div>
    )
  }
export default Intro;  