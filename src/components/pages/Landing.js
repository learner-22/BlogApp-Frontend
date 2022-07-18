import {useState} from 'react'
import RegisterForm from "../forms/RegisterForm"
import LoginForm from '../forms/LoginForm'


const Landing =(props) =>{
    const {setUser} =props
    const[hasAccount, setHasAccount] = useState(true)
    return(
        <div>
            <h1> Welcome to My-Blogs </h1>
            {hasAccount === false ? (
                <div>
                    <RegisterForm setUser={setUser}/>
                
                </div> 
            ) : 
            <div>

            <LoginForm setUser={setUser}/>
            <p> Create an account? <span className="btn btn-primary" onClick ={()=>setHasAccount(false)}> Register</span></p>
            </div>}
        </div>
    )
}

export default Landing