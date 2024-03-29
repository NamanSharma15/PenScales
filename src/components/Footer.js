import React from 'react'
import { Link } from 'react-router-dom'
const Footer = (pros) => {
  return (
    <div className=''>
        <div className='lg:mt-0 mt-40 text-white'>
          .
        </div>
        <footer className=" p-4 bg-gray-400 shadow md:px-6 md:py-8 dark:bg-gray-400 w-full bottom-0 lg:relative fixed">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link to="/" className="flex items-center mb-4 sm:mb-0">
              <img src={require("../icon.png")} className="h-14 mr-3 w-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-800">PenScales</span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm text-black sm:mb-0 dark:text-black">
              <li>
                <Link to="/about" className="mr-4 hover:underline md:mr-6 " onClick={()=>{pros.resetPage()}}>About</Link>
              </li>
              <li>
                <Link to="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#" className="mr-4 hover:underline md:mr-6 ">Licensing</Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">Contact</Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 3 <Link to="/" className="hover:underline">PaperScales™</Link>. All Rights Reserved.
          </span>
        </footer>
      </div>
  )
}

export default Footer