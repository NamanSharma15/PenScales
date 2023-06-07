import React,{useContext,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import NewsBox from '../context/NewsContext';
import { Link } from 'react-router-dom';
import Load from './Lorder';
import {AiOutlineLike,AiFillLike} from "react-icons/ai"
const BlogPage = () => {
  const {blogId} = useParams()
  const context = useContext(NewsBox);
  const {Current,getById,Lorder,setLorder} = context
  const [Date, setDate] = useState("");
  useEffect(() => {
    setLorder(true);
    getById(blogId).then(()=>{setLorder(false)})
    setDate(Current.Date)
  }, []);
  return (
    <>
    {Lorder ? <div> <Load/> </div>:     <div className='container px-5 py-20'>
      <div className="max-w-4xl text-justify px-6 py-16 mx-auto space-y-12">
        <article className="space-y-8 dark:text-gray-800">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{Current.Title}</h1>
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
              <div className="flex items-center md:space-x-2">
                <p className="text-sm">by {Current.Name} •{Current.Date}</p>
              </div>
              <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{Current.Likes} likes • {Current.Views} views</p>
            </div>
          </div>
          <div className="dark:text-gray-800">
            <p>{Current.Content}</p>
          </div>
        </article>
      <div>
      <div className="flex flex-wrap py-6 space-x-2 border-t border-dashed dark:border-gray-400">
        <Link rel="noopener noreferrer" to="#" className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900">Like</Link>
      </div>
    </div>
    </div>
    </div>}   
    </>
  )
}

export default BlogPage