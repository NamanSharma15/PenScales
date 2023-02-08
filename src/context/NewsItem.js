import { useState } from "react";
import { Home } from "../components/Home";
import NewsBox from "./NewsContext";
const NewsItem = (props) => {
    const host = "localhost:5000"
    const newsInital = []
    const [news, setnews] = useState(newsInital);
    const getArticles = async ()=>{
        const response = await fetch('localhost:5000/api/blogs',{method:"GET",headers:{
            'Content-Type':'application/json',
        }    
        })
        const json =await response.json()    
        setnews(json)
    }
    return(
        <NewsBox.Provider value={{news}}>
            {props.children}
        </NewsBox.Provider>
    )
}
export default NewsItem
