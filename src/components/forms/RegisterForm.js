import { useState } from "react"
import axios from 'axios'
import { useHistory } from "react-router-dom"
const RegisterForm =(props) =>{
  
    const history = useHistory()
    const[formData, setFormData] = useState({
        username:'',
        email:'',
        birthday:'',
        password:''
    })
    
    const handleSubmit =(e) =>{
        e.preventDefault()
        console.log(formData)
        axios.post('http://localhost:4000/auth/registration', formData)
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
               <div className = "mb-3">
               <input className ="form-control" type='text' id='username' name='username' placeholder="UserName" value ={formData.username}   onChange={e => setFormData({...formData, [e.target.id]:e.target.value})}/>
               </div>

               <div className = "mb-3">
               <input className ="form-control" type='text' id='email' name='email' placeholder="Email Address" value ={formData.email} onChange={e => setFormData({...formData, [e.target.id]:e.target.value})} />
               </div>

               <div className = "mb-3">
               <input className ="form-control" type='date' id='birthday' name='birthday'  placeholder="Date of Birth"   value ={formData.birthday}  onChange={e => setFormData({...formData, [e.target.id]:e.target.value})} />
                </div>

                <div className = "mb-3">
               <input className ="form-control" type='password' id='password' name='password' placeholder="Password" value ={formData.password} onChange={e => setFormData({...formData, [e.target.id]:e.target.value})} />
               </div>

               <input type="Submit" className="btn btn-primary"/>
                </form> 
        </div>
    )
}

export default RegisterForm