import React,{useContext,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import NewsBox from '../context/NewsContext';
import { Link } from 'react-router-dom';
import Load from './Lorder';
import {AiOutlineLike,AiFillLike} from "react-icons/ai"
const BlogPage = () => {
  const {blogId} = useParams()
  const [Liked,setLiked]= useState(undefined)
  const [User,setUser] = useState({"LikedPosts":[]})
  const [chine, setchine] = useState(0);
  const context = useContext(NewsBox);
  const {Current,getById,Lorder,setLorder,resetPage,updateBlog,getUser} = context
  const [Date, setDate] = useState("");
  const isLiked = ()=>{
    setLiked(User.LikedPosts.find(element => element==blogId))
  }
  const effect = async ()=>{
    if(chine==0){
    let d  = await getUser(localStorage.getItem('token')).then((res)=>{return res})
    setUser(d)
    setchine(chine+1)
  }
  }
  const wait =async ()=>{
    setLorder(true);
    resetPage();
    await effect()
    getById(blogId).then(()=>{setLorder(false)})
    setDate(Current.Date)
    updateBlog(blogId,1)
  }
  const likedClick=()=>{
    if(Liked==undefined){
      setLiked(1)
    }
    else{
      setLiked(undefined)
    }
  }
  useEffect(() => {
    wait()
    isLiked()
  }, [User]);
  const ClickLike = async()=>{
    await updateBlog(blogId,2)
    likedClick()
  }
  return (
    <>
    {Lorder ? <div> <Load/> </div>:     <div className='container px-5 py-20'>
      <div className="max-w-4xl text-justify px-6 py-16 mx-auto space-y-12">
        <article className="space-y-8 dark:text-gray-800">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{Current.Title}</h1>
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
              <div className="flex items-center md:space-x-2">
                <p className="text-sm">by {Current.Name} • {Current.Date}</p>
              </div>
              <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{Current.Likes} likes • {Current.Views} views</p>
            </div>
          </div>
          <div className="dark:text-gray-800">
            <pre className='whitespace-pre-wrap font-serif'>{Current.Content}</pre>
            
          </div>
        </article>
      <div>
        <hr className=' h-0.5 bg-gray-800'/>
      <div className="flex flex-wrap py-6 space-x-2 border-t border-dashed dark:border-gray-400">
        <button className="py-1 rounded-sm  bg-transparent text-md text-gray-900 flex flex-auto px-6" onClick={ClickLike}>Like this Blog : <span>  {Liked==undefined ? <AiOutlineLike className='mx-5 text-2xl hover:text-blue-400'/>:<AiFillLike className='text-blue-800 mx-5 text-2xl hover:text-black'/>}</span></button>
      </div>
    </div>
    </div>
    </div>}   
    </>
  )
}

export default BlogPage