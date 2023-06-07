import React from 'react'
import { TailSpin } from "react-loader-spinner";
const Lorder = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
        <div><TailSpin
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/></div>
    </div>
  )
}

export default Lorder