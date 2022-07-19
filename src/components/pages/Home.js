import NavBar from '../layout/NavBar'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CreateBlog from '../forms/CreateBlog'
const Home =(props) =>{
    const [ blogData , setblogData] = useState(null)

    useEffect ( () =>{
        axios.get('http://localhost:4000/blogs',{
            headers: {
                'x-auth-token' :localStorage.getItem('userToken')
            }
        }).then( res=>setblogData(res.data)).catch(err => console.error(err))
    },[])
    return(
        <div>
            <h1> Blogs Home Page</h1>
            <NavBar user={props.user}/>
            <CreateBlog setblogData ={setblogData} blogData ={blogData} user={props.user}/>

            {blogData && blogData.map(blog =>(
                <div className = 'container' style ={ {margin:'20px'}}key = {blog._id}>
                    <h5> Title : {blog.blog_title}</h5>
                    <h6> Content : {blog.blog_content}</h6>
                </div>
            )

            ) }
        </div>
    )
}

export default Home