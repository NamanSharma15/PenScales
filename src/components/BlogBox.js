import React from 'react'
import { Link } from 'react-router-dom'
const BlogBox = (props) => { 
  const {news1} = props
  return (
    <div>
        <article className="flex flex-col bg-gray-100 dark:bg-gray-100 hover:bg-gray-300 border-2 rounded-md">
            <Link rel="noopener noreferrer" aria-label="Te nulla oportere reprimique his dolorum" to={'/blog/'+news1._id}>
              <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={require("../image1.png")} />
            </Link>
            <div className="flex flex-col flex-1 p-6">
              <Link rel="noopener noreferrer" to="#" aria-label="Te nulla oportere reprimique his dolorum"></Link>
              <Link rel="noopener noreferrer" to="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">{news1.Tag}</Link>
              <Link to={'/blog/'+news1._id}><h3 className="flex-1 py-2 text-lg font-semibold leading-snug cursor-pointer hover:underline hover:text-blue-800">{news1.Title}</h3></Link>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>{news1.Date}</span>
                <span></span>
              </div>
            </div>
        </article>
    </div>
  )
}

export default BlogBox