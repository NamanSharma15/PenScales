import React from 'react'
import { Link } from 'react-router-dom'
const BlogBox = (props) => { 
  const {news1} = props
  return (
    <div>
        <article className="flex flex-col dark:bg-gray-100 hover:bg-gray-200 border-2 rounded-md">
            <Link rel="noopener noreferrer" to="#" aria-label="Te nulla oportere reprimique his dolorum">
              <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={require("../image1.png")} />
            </Link>
            <div className="flex flex-col flex-1 p-6">
              <Link rel="noopener noreferrer" to="#" aria-label="Te nulla oportere reprimique his dolorum"></Link>
              <Link rel="noopener noreferrer" to="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">{news1.Tag}</Link>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug cursor-pointer">{news1.Title}</h3>
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