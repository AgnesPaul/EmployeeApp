import Button from "../components/Button"
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import { useState , useEffect} from "react";
import { useLoginMutation } from "../services/api";
import {setStorage} from "../services/utils"
import sideImage from "../images/side-image.png"
import logo from "../images/kv logo.png"


const Login = () => {
const navigate = useNavigate()


const [login, result] = useLoginMutation()

const [state, setState] = useState({
    username:"",
    password:""
})

useEffect(()=>{
    if(result.isSuccess){
        console.log(result.data.data.idToken)
        setStorage("AuthToken",result.data.data.idToken)
        navigate('/list')
    }
},[result]);

const onInputChange =(key,value)=>{
    setState({
        ...state,
        [key]:value,
        
    })
}

const onLogin =()=>{
    const payload = {
        username : state.username,
        password: state.password
    }
    login(payload)

   
}

useEffect(()=>{
    console.log(state)
    
    },[state])


const goToNextPage=()=>{
    navigate('/list')
}

    return(
        <div className="loginPage">
        <div className="loginImage">
             <img  src={sideImage}/>
             </div> 
        <div className="loginForm">
            <img  src={logo}/>
            <InputField id="username"  type="text" placeholder="Username" onChange={(value) => onInputChange("username", value)}/>
            <InputField id="password"  type="text" placeholder="Password" onChange={(value) => onInputChange("password", value)}/>
            <Button className="Create" label="Login" value="click" handleClick={()=>onLogin()}/>
            
        </div>    
         
        </div>
        
    )
}

export default Login;