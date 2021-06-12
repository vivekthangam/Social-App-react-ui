import './login.css'
export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">
                        Social
                    </h3>
                    <span className="loginDesc">
                        connect with friends and the world around you on social.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input Placeholder="Email" className="loginInput" />
                        
                        <input Placeholder="Email" className="loginInput" />
                        <button className="loginButton">
                            Log In
                        </button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegister">
                            Create Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
