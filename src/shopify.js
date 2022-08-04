/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import shopify from './Shopify.svg';
function Shopify() {
  return (
    <div className="bg-teal-900">
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 h-full w-full" aria-hidden="true">
          <div className="relative h-full">
           
          </div>

          <div className="-mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Data to enrich your</span>
                <span className="block text-white">online business</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-20 md:mt-40">
        <div className="-mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight text-white sm:text-5xl md:text-5xl">
                <span className="block text-white">Managing your ecommerce business<br /> on the go is easy. </span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Our customers enjoy complete freedom of doing business online by managing 
              every aspect of their online store from their mobile and web devices.
              </p>
            </div>
          </div>
        </div>
          <div className="absolute inset-0  flex flex-col" aria-hidden="true">
            <div className="flex-1" />
            <div className="flex-1 w-full bg-teal-900" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10">
            <img
              className="relative rounded-lg shadow-lg"
              src={shopify}
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
  )
}
export default Shopify;