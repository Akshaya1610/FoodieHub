import React, { useRef,useState } from 'react'
import {validateData, validateUserName} from '../utils/validateData';
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector, } from 'react-redux';
import { addUser} from "../utils/cartSlice";

const Login = () => {
    const [isSignInForm, setSignInForm] = useState(true);
    const [errorMesaage, setErrorMessage] = useState(true);
    const user = useSelector((store) => store.cart.users);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userId = useRef(null);
    const password =  useRef(null);
    const name=  useRef(null);

    const toggleClass = () =>{
        setSignInForm(!isSignInForm)
    }
    const validateFormData = () => {
        if (userId.current?.value.length  === 0 ) {
            setErrorMessage("please fill mandatory field");
            return
        } else if(password.current?.value.length  === 0){
            setErrorMessage("please fill mandatory field");
            return
        }else if(!isSignInForm  && name.current?.value.length === 0){
            console.log("required");
            setErrorMessage("please fill mandatory field");
            return
        }

        const message = validateData(userId.current.value, password.current.value)
        setErrorMessage(message);
        if (message) return;
        const id = userId.current.value;
        const currentPassword = password.current.value;
       

        if(!isSignInForm){
            const userName = name.current.value;
            let signinObj = {id,currentPassword,userName}
            fetch("http://localhost:3000/users", {
                method:"POST",
                headers:{'content-type':'application/json'},
                body: JSON.stringify(signinObj)

            }).then((response)=>{
                dispatch(
                    addUser({
                      id: id,
                      displayName: userName ,
                    })
                );
                navigate("/main")
                
            }).catch((error)=> {
                setErrorMessage(error);
            })
        }
        if(isSignInForm){
            fetch("http://localhost:3000/users/" + id).then((res)=>{
                console.log(res.json)
                return res.json();
        }).then((response)=>{
                if(Object.keys(response).length === 0){
                    setErrorMessage("please enter valid email id")
                }else{
                    if(response.currentPassword === currentPassword ){
                        dispatch(
                            addUser({
                              id: response.id,
                              displayName: response.userName,
                            })
                          );
                        
                          navigate("/main")
                    }else{
                        setErrorMessage("please enter valid credentials")
                    }
                }
        }).catch((error)=> {
                setErrorMessage(error);
            }) 
        }
    }
  return (
    <div className='login'>
        <div className='card'>
            <div className='card-header'>{isSignInForm ? "Login" : "Sign Up" }</div>
                <form onSubmit={(e) => e.preventDefault()} className="">
                    { !isSignInForm && <div className=''>
                        <input 
                         ref={name}
                         type="text" 
                         placeholder="Full Name"
                         className="input-fleld"/>
                    </div>
                    }
                    <div className=''>
                        <input   ref={userId}
                         type="text"  placeholder="Email" className="input-fleld"/>
                    </div>
                    <div className='input-field'>
                        { isSignInForm ?
                        <input   ref={password}
                            type="password" placeholder="Password" className="input-fleld"/> :
                        <input    ref={password}
                            type="password" placeholder="Create Password" className="input-fleld"/>
                        }
                    </div>
                    <p className='red-text'>{errorMesaage}</p>
                    <div className='btn-center'>
                        <button className="btnlogin" onClick={validateFormData}
                            >{isSignInForm ? "Login" : "Sign Up"}</button>
                    </div>
                    <p className="sign-up" onClick={toggleClass}>
                        { isSignInForm ?  "New to Foodiehub? Sign up now" :
                                           "Already Registered? click here to  Login"   } 
                    </p>
                </form>
        </div>
    </div>
  )
}

export default Login;