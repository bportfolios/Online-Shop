import React, {useState} from 'react'
import "./Login.css"
import { Link, useHistory } from "react-router-dom"
import {auth} from "./firebase";

function Login() {
    const histroy=useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState(''); 

    const login = (e) => {
    e.preventDefault(); //this stops the refresh
    //do the login logic
    auth
    .signInWithEmailAndPassword(email,password)
    .then((auth) => {
        //logged in  then redirect to homepage
        histroy.push('/');
    })
    .catch((e) => alert(e.message))
};

const create = (e) => {
    e.preventDefault(); //this stops the refresh
    //do the create logic
    auth
    .createUserWithEmailAndPassword(email,password)
    .then((auth) => {
        //created a user and logged in  then redirect to homepage
        histroy.push('/');
    })
    .catch((e) => alert(e.message))
};

    return (
        <div className="login ">
            <Link to="/">
                <img className="login__logo"
                    src="http://pngimg.com/uploads/ganesha/ganesha_PNG2.png"
                    alt=""
                />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event=>setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event=>setPassword(event.target.value)} type="password " />
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p>By signing in you agree to all our term and conditions.</p>
                <button onClick={create} className="login__createButton">Create new account</button>
            </div>
        </div>
    )
}

export default Login
