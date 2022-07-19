import {useState} from 'react'
import axios from 'axios'
const CreateBlog =(props) =>{
    const [formData , setFormData] =useState({
        blog_title: '',
        blog_content: '',
        private : false,
        created_by :''
      })

      const handleSubmit =(e) =>{

        e.preventDefault()
        formData.created_by = props.user.username
        axios.post('http://localhost:4000/blogs', formData,{
            headers: {
                'x-auth-token': localStorage.getItem('userToken')
            }
            }).then(res => {
                console.log(res.data)
                props.setblogData([...props.blogData, res.data])

            })
    
          
      }

    return(
        <div>

<form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label" htmlFor="title">
          Title
        </label>
        <input
          className="form-control"
          type="text"
          id="blog_title"
          name="title"
          value={formData.blog_title}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.id]: e.target.value })
          }
        />
         </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="details">
            Details
          </label>
          <input
            className="form-control"
            type="text"
            id="blog_content"
            name="details"
            value={formData.blog_content}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.id]: e.target.value })
            }
          />
        </div>
  
        <input type="submit" className="btn btn-secondary" />
      </form>

        </div>
    )
}

export default CreateBlog