import React from 'react'
import './Login.css'
import {auth,provider} from './firebase'
import {Button} from "@material-ui/core"

function Login() {
    const signIn = ()=>{
        auth.signInWithPopup(provider).catch(error=>{
            alert(error.message)
        })
    }
    return (
        <div className = 'login'>
            <div className="login__logo">
                <img src = "https://i1.wp.com/blog.travian.com/wp-content/uploads/2020/05/discord.png?fit=980%2C504&ssl=1" alt = "Discord Image Here"></img>
            </div>

            
            <Button  onClick = {signIn} variant="contained" color="primary" >Sign In</Button>
        </div>
    )
}

export default Login
