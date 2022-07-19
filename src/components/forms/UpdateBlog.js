import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";



const UpdateBlog =(props)=>{
    const [blogData, setblogData] = useState(null);
    const { id } = useParams();
    const history = useHistory();
    useEffect(() => {
        axios
          .get(`http:///localhost:4000/blogs/${id}`, {
            headers: {
              "x-auth-token": localStorage.getItem("userToken"),
            },
          })
          .then((res) => {
            console.log(res.data)
            setblogData(res.data)
          })
          .catch((err) => console.error(err));
      }, []);

    const handleSubmit =(e) =>{
        e.preventDefault();
        axios.put(`http://localhost:4000/blogs/${id}`, blogData, {
            headers: {
              'x-auth-token': localStorage.getItem("userToken")
            }
          }).then(res => history.push('/home'))
    }
    return(
        <div>

         <h2> Update the Blog </h2>   
            {blogData && (
        <form onSubmit={handleSubmit}>
          <label className="form-label" htmlFor="title">
            Title
          </label>
          <input
            className="form-control"
            type="text"
            id="blog_title"
            name="title"
            value={blogData.blog_title}
            onChange={(e) =>
              setblogData({ ...blogData, [e.target.id]: e.target.value })
            }
          />

          <div className="mb-3">
            <label className="form-label" htmlFor="details">
              Details
            </label>
            <input
              className="form-control"
              type="text"
              id="blog_content"
              name="details"
              value={blogData.blog_content}
              onChange={(e) =>
                setblogData({ ...blogData, [e.target.id]: e.target.value })
              }
            />
          </div>

          <input
            type="submit"
            className="btn btn-success"
            value="Update Blog"
          />
        </form>
      )}
        </div>
    )
}

export default UpdateBlog