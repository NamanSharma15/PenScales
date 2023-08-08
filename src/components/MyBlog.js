import React from 'react'
import { Link } from 'react-router-dom'

const MyBlog = (props) => {
    console.log(props.post)
  return (
    <div>
         <Link to={`/blog/${props.post.Id}`} className="border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                    <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                    {props.post.Title}
        </Link>
    </div>
  )
}

export default MyBlog