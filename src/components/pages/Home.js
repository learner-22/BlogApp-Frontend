import NavBar from '../layout/NavBar'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CreateBlog from '../forms/CreateBlog'
import { useHistory } from 'react-router-dom'

const Home =(props) =>{
    const history = useHistory()
    const [ blogData , setblogData] = useState(null)

    useEffect ( () =>{
        axios.get('http://localhost:4000/blogs',{
            headers: {
                'x-auth-token' :localStorage.getItem('userToken')
            }
        }).then( res=>setblogData(res.data)).catch(err => console.error(err))
    },[])

    const handleDelete = (blog) =>{
        axios.delete(`http://localhost:4000/blogs/${blog._id}`,{
            headers: {
                'x-auth-token': localStorage.getItem('userToken')
            },
        }).then(res=>setblogData([...blogData.filter(b =>b._id !== blog._id)])).catch(err => console.error(err))

    }
    return(
        <div>
            <h1> Blogs Home Page</h1>
            <NavBar user={props.user}/>
            <CreateBlog setblogData ={setblogData} blogData ={blogData} user={props.user}/>

            {blogData && blogData.map(blog =>(
                <div className = 'container' style ={ {margin:'20px'}}key = {blog._id}>
                    <h5> Title : {blog.blog_title}</h5>
                    <h6> Content : {blog.blog_content}</h6>
                    <h6> Author : {blog.created_by}</h6>
                    {blog.user === props.user._id && <span className="btn btn-danger" onClick ={ () => handleDelete (blog)}> Delete </span>}
                    <span className="btn btn-warning"> Update </span>
                </div>
            )

            ) }
        </div>
    )
}

export default Home