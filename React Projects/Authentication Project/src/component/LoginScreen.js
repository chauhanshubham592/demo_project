import React ,{ useState } from 'react'
import axios from 'axios' 
import { connect } from 'react-redux'
import authenticationReducer from '../reducer/authenticationReducer'

function LoginScreen(props) {
    const {authSuccess} = props

    const [signUp,setSignUp] = useState(true)

    const handelSubmit = (e)=>{
        e.preventDefault()
        let key = "AIzaSyArk5Mkf-TgpW45HVcHKbhtZKmc0I7kRE0"
        let url = ( signUp ? "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" : "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=") + key 
        const credentials={returnSecureToken:true}
        Array(2).fill("").forEach((_,i)=>{
            credentials[e.target[i].name]=e.target[i].value
        })
        axios.post(url,credentials).then(res=>{
            console.log(res.data)
            authSuccess(res.data)
            props.history.push("/landingscreen")
        })
       
    }
    return (
        <div>
            <div>
                <h1> {signUp ? "SignUp" : "SignIn"} Mode </h1>
            </div>
            <div>
                <button type="button" onClick={ ()=>{setSignUp(!signUp)}}> Toggle Me </button>
            </div>
            <form onSubmit={handelSubmit}>
                <input type="text" placeholder="Enter Your Email" name="email" />
                <input type="password" placeholder="Enter Your Password" name="password" />
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        authSuccess: val => dispatch({type:'AUTH_SUCCESS', payload:val})
    }
    
}
export default connect(null,mapDispatchToProps)(LoginScreen)
