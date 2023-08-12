import React, { useContext, useEffect, useState } from 'react'
import NewsBox from '../context/NewsContext'
import axios from 'axios'
const UpdateProfile = () => {
  const [extraCradentials,setextraCradentials] = useState({"Profession":"","Description":""})
  const host = "http://localhost:5000"
  const context  = useContext(NewsBox)
  const {resetPage} = context
  const [file, setfile] = useState();
  const [imgSource, setimgSource] = useState(host+"/images/"+localStorage.getItem("token")+".jpeg");
  const onImageUp=async (e)=>{
    let a = await setfile(e.target.files[0])
    console.log(file)
    let b = await setimgSource(URL.createObjectURL(e.target.files[0]))
  }
  const onChange = (e)=>{
    setextraCradentials({...extraCradentials,[e.target.name]:e.target.value})
}  

  const onSubmit= (e)=>{
    e.preventDefault()
    const formData = new FormData()
    formData.append("image",file)
    axios({method:"post",url:`${host}/api/profile/image`,headers:{"Content-Type":"multipart/form-data"},params:{"token":localStorage.getItem("token")},data:formData})
  }
 useEffect(()=>{
  resetPage()
 },[])
return (
    <>
    <div className='flex flex-col px-5 md:py-20 pt-20 pb-8'>
      <h1 className='mx-auto text-3xl bold'><b>Update Your Profile</b></h1>
    </div>
    <div className='md:hidden mb-10'>
    <div className='mx-auto md:hidden border-2 border-black w-24 h-32 flex justify-center items-center'><img className='w-20 h-28' src = {imgSource} alt="profile picture not found"/></div>
    </div>
    <div className='flex flex-col'>
        <div className='px-10 md:flex md:flex-row'>
          <div className='md:mr-10 md:w-3/4'><span className='flex flex-row'>Profile Picture:          
          <input type ="file" className="bg-gray-300  border p-1 md:p-2 rounded-lg  max-md:mt-5 md:ml-5 ml-4 w-full md:w-2/5" onChange={onImageUp}/> </span>
          <span className='flex flex-row mt-5'>
          Profession:
          <input className='bg-gray-300 md:ml-11 ml-4 w-full md:w-2/5 border rounded-lg focus:border-indigo-300 p-2' placeholder='Enter your profession' name='Profession' onChange={onChange} value={extraCradentials.Profession}></input>
          </span>
          <div className='flex flex-row mt-5'>
          Description:
          <textarea className='bg-gray-300  md:ml-9 ml-4 h-48 w-full md:w-2/5 resize-none border focus:border-indigo-300 rounded-lg  p-2' name='Description' onChange={onChange} value={extraCradentials.Description} placeholder='Enter your description'></textarea>
          </div>
          </div>
        <div className='hidden border-2 w-32 h-40 max-md:mt-5 md:flex focus:border-indigo-300 justify-center items-center'><img className='w-28 h-36' src = {imgSource}  alt="profile picture not found"/></div></div>
    </div>
    <div className='flex flex-row items-center mt-10'>
      <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mx-auto" onClick={onSubmit}>Submit</button>
    </div>
    </>
  )
}

export default UpdateProfile