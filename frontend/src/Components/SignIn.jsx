import React,{useState} from 'react'
import axios from 'axios'
import NavBar from './NavBarOne';
import { useNavigate} from 'react-router-dom';





 function SignIn(){

    const[regNo,setRegNo] = useState("")
    const[password,setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8070/signIn',{regNo,password})
    .then( result => {console.log(result)
        if(result.data === "Success"){
            navigate("/dashboard")
        }
    })
    .catch(err=>console.log(err))
    }


    return (
        <div>
        <NavBar />
        <div class="container text-center mt-5">
        <h1>QBIT</h1>
        <div class="d-flex justify-content-center align-items-center custom-margin-top">
        <form onSubmit={handleSubmit}>
            <div class="mb-5 form-outline">
            <input type="text" class="form-control form-control-lg" placeholder="Register Number" name="regNo" onChange={(e)=>{
                        setRegNo(e.target.value)
                    }}/>
            </div>
            <div class="mb-5">
            <input type="password" class="form-control form-control-lg" placeholder="Password" name="password" onChange={(e)=>{
                        setPassword(e.target.value)
                    }}/>
            </div>
            <button type="submit" class="btn btn-dark btn-lg px-5 ">Sign In</button>
        </form>
    </div>
</div>
</div>
    )
}

export default SignIn;