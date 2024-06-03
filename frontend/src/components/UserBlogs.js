import axios from 'axios';
import React, { useEffect,useState } from 'react'
import Blog from './Blog';
//import Blog from './Blog';

const UserBlogs = () => {
  const [user,setUser] = useState();
  const id = localStorage.getItem("userId");
  const sendRequest = async() => {
    const res = await axios.get(`https://blog-app-1-nh71.onrender.com/api/blog/user/${id}`).catch(err=>console.log(err));
    const data = await res.data;
    return data;

  }
  useEffect(() => {
    sendRequest().then(data=>setUser(data.user))
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[])
  console.log(user);
  return <div>
  {user && user.blogs && 
   user.blogs.map((blog,index) => (
    <Blog
    id={blog._id}
    key={index}
    isUser={true}
    title={blog.title} 
    description={blog.description} 
    imageURL={blog.image} 
    userName={user.name} />
   ))}
 </div>
};
  
 


export default UserBlogs