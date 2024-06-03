import { Routes ,Route, Navigate} from "react-router-dom";
import Header from "./components/Header";
import Auth from "./components/Auth";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetail from "./components/BlogDetail";
import AddBlog from "./components/AddBlog";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const dispath = useDispatch();
  const isLoggedIn =  useSelector(state => state.isLoggedIn);
  console.log(isLoggedIn);
  useEffect(() => {
    if(localStorage.getItem("userId")){
      dispath(authActions.login());
    }
  },[dispath])
  return <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
         <Route path="/" element={<Navigate replace to="/about" />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
       {!isLoggedIn ? <Route path="/auth" element={<Auth/>}/>:
      <>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/blogs/add" element={<AddBlog/>}/>
        <Route path="/myBlogs" element={<UserBlogs/>}/>
        <Route path="/myBlogs/:id" element={<BlogDetail/>}/>
      </> }
      </Routes>
    </main>
  </React.Fragment>;
};

export default App;
