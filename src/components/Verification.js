import React,{useEffect,useContext, useState,useRef} from 'react'
import { Link } from 'react-router-dom';
import NewsBox from '../context/NewsContext';

const Verification = () => {
    const [otp, setotp] = useState("");
    const context = useContext(NewsBox);
    const OTPForm = useRef();
    const SendOTP = useRef();
    let {verifyEmail} = context
    const onChange= (e)=>{
        setotp(e.target.value)
    }
    const onClick=(e)=>{
      e.current.preventDefault()
      console.log("clicked")
    }
    const SendOTPFunc=()=>{
      OTPForm.current.classList.remove("hidden")
      SendOTP.current.classList.add("hidden")
    }
  return (
    <div>
        <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-12 mr-2" src={require("../icon.png")} alt="logo" />
            PenScales  
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <span className="" ref={SendOTP}>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Account Verification
              </h1>
              <p>
                We will be sending an email to Email Address: {verifyEmail} <br/>to verify your account
              </p>
                <button className="w-full text-white mt-2 bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={SendOTPFunc}>Send OTP</button>
              </span>
              <div className="space-y-4 md:space-y-6 hidden" ref={OTPForm}>
                <div>
                  <label htmlFor="otp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">OTP</label>
                  <input type="text" onChange={onChange} value={otp} name="otp" id="otp" placeholder="Enter the OTP" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <button className="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={onClick}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Verification