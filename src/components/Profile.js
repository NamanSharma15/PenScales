import React,{useContext, useEffect,useState} from 'react'
import { useParams ,Link,useNavigate} from 'react-router-dom'
import NewsBox from '../context/NewsContext'
import MyBlog from './MyBlog'
import Load from './Lorder'
const Profile = () => {
    const {uid} = useParams()
    const host = "http://localhost:5000"
    const [imgSrc,setimgSrc]= useState("")
    const hist = useNavigate()
    const context =  useContext(NewsBox)
    const {getUser,getMyposts,resetPage,Lorder,setLorder} = context 
    const [User, setUser] = useState({});
    const [Posts, setPosts] = useState([]);
    const onClick = ()=>{
      localStorage.removeItem('token')
      hist("/login")
    }
    const onClickUp = ()=>{
      hist(`/updateprofile/${localStorage.getItem('token')}`)
    }
    const effect = async ()=>{
      await getUser(localStorage.getItem('token')).then((res)=>{setUser(res)})
      let f = await getMyposts(localStorage.getItem('token')).then((res)=>{return res})
      setPosts(f.s)
       const img = new Image();
       img.src = `${host}/images/${localStorage.getItem("token")}.jpeg`;
      let condition  = new Promise((resolve) => {
          img.onload = () => setimgSrc(`${host}/images/${localStorage.getItem("token")}.jpeg`);
          img.onerror = () => setimgSrc(`${host}/images/default.jpeg`);
      });
      setLorder(false)
    }
    useEffect(() => {
      setLorder(true)
      if(!(localStorage.getItem("token"))){
        hist("/login")
        resetPage()
      }
      effect()
    }, [])
    
  return (
    <>
    {Lorder?<Load/>:<div className='py-6 sm:py-12'>
        <div className="container mx-auto mt-60 mb-10">
        <div>
          <div className="bg-white relative rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto border-2 shadow border-slate-50">
            <div className="flex justify-center">
              <img src={imgSrc} alt="" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
            </div>
            <div className="mt-16">
              <h1 className="font-bold text-center text-3xl text-gray-900">{User.Name}</h1>
              <p className="text-center text-sm text-gray-400 font-medium">{User.Profession}</p>
              <p>
                <span>
                </span>
              </p>
              <div className="my-5 px-6">
                <Link to="#" className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">Contact using {User.Email}</Link>
              </div>
              <div className="w-full mt-2 ">
                <h3 className="font-medium text-gray-900 text-left px-6">Description</h3>
                <div className='mt-5 w-full text-gray-900 px-7'>
                  {User.Description}
                </div>
                <h3 className="font-medium text-gray-900 mt-5  text-left px-6">Your Posts</h3>
                <div className="mt-5 w-full flex flex-col overflow-hidden text-sm">{Posts.length!==0?Posts.map((post)=>{
                 return(<MyBlog post = {post}/>)}):<div className='mx-auto'>No Posts to View</div>}
                <div className='flex flex-row mx-auto items-center'>
                  <button onClick={onClickUp} type='button' className='bg-green-500 rounded-lg mr-2 mt-5 px-3 py-1 text-lg text-white border-4 border-slate-200 mb-2 hover:bg-slate-600'>Update Profile</button>
                  <button onClick={onClick} type='button' className='bg-red-500 rounded-lg ml-2 mt-5 px-3 py-1 text-lg text-white border-4 border-slate-200 mb-2 hover:bg-slate-600'>Log Out</button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>}
    </>
  )
}

export default Profile