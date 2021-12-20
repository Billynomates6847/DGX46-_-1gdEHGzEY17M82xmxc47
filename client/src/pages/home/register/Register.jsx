import { useRef, useState } from "react"
import "./register.scss"

export default function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }

    const handleFinish = () => {
        setPassword(passwordRef.current.value)
    }

    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                <img className="logo" src="https://i.ibb.co/jgYHdnP/NITEWAVEWHITE.png" alt="" />

                <button className="loginButton">Sign In</button>
                </div>
                <div className="container">
                    <h1>Movies and Series from Small Filmmakers</h1>
                    <h2> Access a Library of GREAT content for completely FREE!</h2>
                    <p> Enter your email below to get started! </p>
                    {
                        !email ? (
                            <form className="input">
                    <input type="email" placeholder="Enter your Email Address" ref={emailRef}/>
                    <button className="registerButton" onClick={handleStart}>Get Started</button>
                    </form>
                        ) : (
                            <form className="input">
                    <input type="password" placeholder="Choose a Password" ref={passwordRef}/>
                    <button className="registerButton" onClick={handleFinish}>Start</button>
                    </form>
                            
                        )}
                    
                </div>
            </div>
        </div>
    )
}
