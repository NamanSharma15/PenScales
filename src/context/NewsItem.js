import { useState } from "react";
import NewsBox from "./NewsContext";
const NewsItem = (props) => {
    const host = "localhost:5000"
    const newsInital = []
    const [news, setnews] = useState(newsInital);
    const [Current, setCurrent] = useState({});
    const [Lorder, setLorder] = useState(false);
    const [UserId, setUser] = useState()
    const resetPage = ()=>{
        window.scrollTo(0, 0)
    }
    const getArticles = async ()=>{
        const response = await fetch(`http://${host}/api/blogs`,{method:"GET",headers:{
            'Content-Type':'application/json',
        }   
        })
        const json =await response.json()  
        setnews(json)
    }
    const getById = async(id)=>{
        const response = await fetch(`http://${host}/api/blogs/byId/`,{method:"POST",headers:{
            'Content-Type':'application/json',
        },    
        body:JSON.stringify({_id:id}) 
        })
        const json =await response.json()    
        setCurrent(json)
        }
    const newUser = async(json1)=>{
        const response = await fetch(`http://${host}/api/user/signup`,{method:"POST",headers:{
            "Content-Type":"application/json",},
            body:JSON.stringify(json1)
        })
        // const status = response.status()
        // if(status===200){
        //     setUser(response.json)
        // }
    }
    const LoginUser = async(json1)=>{
        const response = await fetch(`http://${host}/api/user/login`,{method:"POST",headers:{
            "Content-Type":"application/json",},
            body:JSON.stringify(json1)
        })
        const s = await response.json()
        setUser(s.uid)
        return s.uid
    }
        return(
            <NewsBox.Provider value={{news,getArticles,Current,getById,resetPage,Lorder,setLorder,UserId,newUser,LoginUser,setUser}}>
                {props.children}
            </NewsBox.Provider>
        )
    }
export default NewsItem
