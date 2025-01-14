import { useState } from "react"
import axios from 'axios'
import { useHistory } from "react-router-dom"

const LoginForm =(props) =>{
   
    const history = useHistory()
    const[formData, setFormData] = useState({
        email:'',
        password:''
    })

    const handleSubmit = e=> {
        e.preventDefault()
        console.log(formData)
        axios.post('http://localhost:4000/auth/Login', formData)
        .then(res=>{
            console.log(res)
          if(res.data.token && res.data.user){
            props.setUser(res.data.user)
            localStorage.setItem('userToken' , res.data.token)
            history.push('./home')
          }
          else{
            console.error(res.data)
            
          }
        })
    }
   
    return(
        <div>

<form onSubmit ={handleSubmit}>
                <div className="mb-3">
                <label  className="form-label"htmlFor ="email">Email</label>
                <input className ="form-control" type='text' id='email' name='email' value={formData.email}
                onChange={e => setFormData({...formData, [e.target.id]:e.target.value})}/>
                </div>
                <div className="mb-3">
                <label className="form-label" htmlFor="password">Password</label>
                <input className ="form-control" type='password' id='password' name='password' value={formData.password}
                 onChange={e => setFormData({...formData, [e.target.id]:e.target.value})}/>
</div>
                <input type="Submit" className="btn btn-info" />

            </form>

        </div>
    )
}

export default LoginForm