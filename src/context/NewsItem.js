import { useState } from "react";
import NewsBox from "./NewsContext";
import Alert from "../components/Alert";
const NewsItem = (props) => {
    const host = "localhost:5000"
    const newsInital = []
    const [news, setnews] = useState(newsInital);
    const [Current, setCurrent] = useState({});
    const [Lorder, setLorder] = useState(false);
    const [UserId, setUser] = useState()
    const [IsLiked, setIsLiked] = useState(0)
    const [alert, setalert] = useState(null)
    const [verifyEmail,setVerifEmail] = useState("")
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
        return json
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
        return s
    }
    const getUser = async(uid)=>{
        const response = await fetch(`http://${host}/api/user/getuser`,{method:"POST",headers:{
            "Content-Type":"application/json",},
            body:JSON.stringify({UID:uid})
        })
        const d = await response.json()
        return d
    }
    const setBlogs = async(uid,blogid)=>{
        const res =  await fetch(`http://${host}/api/user/getarray`,{method:"POST",headers:{
            "Content-Type":"application/json",},
            body:JSON.stringify({uid:uid})   
        })
        const d = await res.json().then((res)=>{return res})
        let g = d.array
        g.push(blogid)
        const response = await fetch(`http://${host}/api/user/setblog`,{method:"PATCH",headers:{
            "Content-Type":"application/json",},
            body:JSON.stringify({uid:uid,arr:g})
        })
        let h = await response.json()
    }
    const getMyposts= async ()=>{
        const response = await fetch(`http://${host}/api/user/myposts`,{method:"POST",headers:{
            "Content-Type":"application/json",},
            body:JSON.stringify({uid:localStorage.getItem('token')})
        })
        let g = await response.json()
        return g
    }
    const updateBlog = async (Id,updo)=>{
        let blog = await getById(Id)
        Id = blog._id
        let value = {}
        let user = {}
        let like = []
        if(updo == 1){
        value = {"Views":blog.Views+1}}
        else{ 
            let user  = await getUser(localStorage.getItem('token'))
            let like = user.LikedPosts
            let Liked = like.find(element => element==Id)
            if(Liked==undefined){
                value = {"Likes":blog.Likes+1}
                like.push(Id)
                const wait = await updateLikesList(user._id,{"LikedPosts":like})
                setIsLiked(0)
            }
            else{
                value = {"Likes":blog.Likes-1}
                    like = like.filter((item)=>{
                    return item !== Id
                })
                const w = await updateLikesList(user._id,{"LikedPosts":like})
                setIsLiked(1)
            }}
        const response = await fetch(`http://${host}/api/blogs/update`,{method:"PATCH",headers:{
            "Content-Type":"application/json",},
            body:JSON.stringify({Id,query:value})
        })
        const  c = await response.json()
        setCurrent(blog)
    }

    const updateLikesList=async (uid,value)=>{
        const response = await fetch(`http://${host}/api/user/likePosts`,{method:"PATCH",headers:{
            "Content-Type":"application/json",},
            body:JSON.stringify({Id:uid,query:{"LikedPosts":value.LikedPosts}})
        })
        let json = await response.json()
    }
    const showAlert= (title,statement,color)=>{
        setalert({title:title,statement:statement,color:color})
        setTimeout(()=>{
            setalert(null)
        },3000)
    }
        return(
            <NewsBox.Provider value={{news,getArticles,Current,getById,resetPage,Lorder,setLorder,UserId,newUser,LoginUser,setUser,getUser,setBlogs,getMyposts,updateBlog,IsLiked,alert,setalert,showAlert,verifyEmail,setVerifEmail}}>
                {props.children}
            </NewsBox.Provider>
        )
    }
export default NewsItem
