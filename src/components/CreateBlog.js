import React,{useState,useEffect,useContext} from 'react'
import {Link,useNavigate } from 'react-router-dom'
import NewsBox from '../context/NewsContext'
const CreateBlog = () => {
  const history = useNavigate()
  const [Cradentials, setCradentials] = useState({name:"",email:"",content:"",title:"",tag:""})
  const context = useContext(NewsBox)
  const {getUser,setBlogs,resetPage} = context
  let s = 0
  const onChange=(e)=>{
    setCradentials({...Cradentials,[e.target.name]:e.target.value})
  }

  useEffect(() => {
    resetPage()
    const effect = ( async ()=>{
    if(!(localStorage.getItem("token"))){
      history("/login")
    }
  })
  effect()
  }, [])
  const Submit = async (e)=>{
    e.preventDefault()
    let s = await getUser(localStorage.getItem('token')).then((res)=>{return res})
      try {
        const response = await fetch('http://localhost:5000/api/blogs',{
          method:'POST',
          headers : {
            'Content-Type':'application/json'
          },
          body:JSON.stringify({name:s.Name,title:Cradentials.title,tag:Cradentials.tag,email:s.Email,content:Cradentials.content,})})
          const json = await response.json()
          await setBlogs(localStorage.getItem('token'),json.Saves._id)
      } catch (error) {
        console.log(error)
      } 
      
      history('/')
  }
  return (
    <div className='dark:bg-gray-100'>
         <section className="text-gray-800 body-font">
        <div className="container px-5 py-20">
        <div className='text-center text-4xl'><h1 className='mb-6 mt-0'> <b> Create a New Blog </b></h1></div>
          <div className="lg:w-3/4 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="">
                  <label htmlFor="title" className="leading-7 text-sm text-gray-800">Title</label>
                  <input type="text" id="title" name="title" value={Cradentials.title} onChange = {onChange} className="w-full bg-gray-300 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="">
                  <label htmlFor="tag" className="leading-7 text-sm text-gray-800">Tag</label>
                  <input type="text" id="tag" name="tag" value={Cradentials.tag} onChange = {onChange} className="w-full bg-gray-300 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="">
                  <label htmlFor="content" className="leading-7 text-sm text-gray-800">Content</label>
                  <textarea id="content" name="content" value={Cradentials.content} onChange = {onChange} className="block  w-full bg-gray-300 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-52 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
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