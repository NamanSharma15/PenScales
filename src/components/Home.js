import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import BlogBox from './BlogBox'
import NewsContext from '../context/NewsContext';
export const Home = (props) => {
  const context = useContext(NewsContext);
  const {news} = context 
  return (
    <>
      <section className="py-6 sm:py-12 bg-gray-100 dark:text-gray-800">
        <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Thought, Opinions and <br/> Knowledge</h2>
          <p className="font-serif text-sm dark:text-gray-400">Read and Share about Anything via PenScales.com</p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {news.map((news1)=>{return(<BlogBox item = {news1}/>)})}
        </div>
        </div>
      </section>
    </>
  )
}
