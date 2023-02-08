import React,{useState} from 'react'
import {Link } from 'react-router-dom'
const CreateBlog = () => {
  const [fname, setfname] = useState("");
  const [mname, setmame] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [content, setcontent] = useState("");
  const [title, settitle] = useState("");
  const [tag, settag] = useState("");
  const onChangefName =(e)=>{
    setfname(e.target.value)
  }
  const onChangelName =(e)=>{
    setlname(e.target.value)
  }
  const onChangemName =(e)=>{
    setmame(e.target.value)
  }
  const onChangeemail =(e)=>{
    setemail(e.target.value)
  }
  const onChangeContent =(e)=>{
    setcontent(e.target.value)
  }
  const onChangeTitle =(e)=>{
    settitle(e.target.value)
  }
  const onChangeTag =(e)=>{
    settag(e.target.value)
  }
  const Submit = async (e)=>{
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:5000/api/blogs',{
        method:'POST',
        headers : {
          'Content-Type':'application/json'
        },
        body:JSON.stringify({name:fname+mname+lname,title:title,tag:tag,email:email,content:content,})})
        const json = await response.json()
        console.log(json)
    } catch (error) {
      console.log(error)
    } 
  }
  return (
    <div className='dark:bg-gray-100'>
         <section className="text-gray-800 body-font">
        <div className="container px-5 py-20">
        <div className='text-center text-4xl'><h1 className='mb-6 mt-0'> <b> Create a New Blog </b></h1></div>
          <div className="lg:w-3/4 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full md:w-1/3">
                <div className="">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-800">First Name</label>
                  <input type="text" id="fname" name="fname" value={fname} onChange = {onChangefName} className="w-full bg-gray-300 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full md:w-1/3">
                <div className="">
                  <label htmlFor="mname" className="leading-7 text-sm text-gray-800">Middle Name</label>
                  <input type="text" id="mname" name="mname" value={mname} onChange = {onChangemName} className="w-full bg-gray-300 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full md:w-1/3">
                <div className="">
                  <label htmlFor="lname" className="leading-7 text-sm text-gray-800">Last Name</label>
                  <input type="text" id="lname" name="lname" value={lname} onChange = {onChangelName} className="w-full bg-gray-300 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-800">Email</label>
                  <input type="email" id="email" name="email" value={email} onChange = {onChangeemail} className="w-full bg-gray-300 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="">
                  <label htmlFor="title" className="leading-7 text-sm text-gray-800">Title</label>
                  <input type="text" id="title" name="title" value={title} onChange = {onChangeTitle} className="w-full bg-gray-300 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="">
                  <label htmlFor="tag" className="leading-7 text-sm text-gray-800">Tag</label>
                  <input type="text" id="tag" name="tag" value={tag} onChange = {onChangeTag} className="w-full bg-gray-300 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="">
                  <label htmlFor="content" className="leading-7 text-sm text-gray-800">Content</label>
                  <textarea id="content" name="content" value={content} onChange = {onChangeContent} className="block w-5/6 bg-gray-300 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-52 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <button type='submit' onClick={Submit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mx-auto">
                Submit Your Blog
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CreateBlog