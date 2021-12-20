
import "./login.scss"

export default function Login() {


    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                <img className="logo" src="https://i.ibb.co/jgYHdnP/NITEWAVEWHITE.png" alt="" />

                </div>
                
            </div>
            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email or Phone Number" />
                    <input type="password" placeholder="Password" />
                    <button className="loginButton">Sign In</button>
                    <span>New to Nitewave Streaming? <b>Create an Account</b></span>
                
                </form>
            </div>
        </div>
    )
}
