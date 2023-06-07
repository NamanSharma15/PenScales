import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {IoMdCreate,IoMdContact} from 'react-icons/io'
const Navbar = (props) => {
  return (
  <div className='mb-3 top-0'>
    <div className='w-full fixed shadow-gray-300 shadow-md z-50'>
        <nav className=" border-gray-200 px-2 sm:px-4 py-1 bg-gray-400">
        <div className="container flex flex-wrap items-center justify-between mx-auto ">
          <Link to="/" className="flex items-center">
            <img src={require("../icon.png")} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-800">PenScales</span>
          </Link>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-400 md:dark:bg-gray-400 dark:border-gray-700">
              <li>
                <Link to="/" className="block py-2 pl-3 pr-4 dark:text-gray-700 bg-white rounded md:bg-transparent md:p-0 md:hover:text-blue-700 " aria-current="page" onClick={()=>{props.resetPage()}}><AiFillHome className='text-2xl'/></Link>
              </li>
              <li>
                <Link to="/create" className="block py-2 pl-3 pr-4 rounded hover:bg-orange-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-100 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-orange-500 " onClick={()=>{props.resetPage()}}><IoMdCreate className='text-2xl'/></Link>
              </li>
              <li>
                <Link to={`/profile/${localStorage.getItem('token')}`} className="block py-2 pl-3 pr-4  rounded hover:bg-orange-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-100 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-orange-500 " onClick={()=>{props.resetPage()}}><IoMdContact className='text-3xl'/></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    --------------
  </div>
  )
}

export default Navbar