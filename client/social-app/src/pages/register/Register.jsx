import './register.css'
export default function Register() {
    return (
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">
                        Social
                    </h3>
                    <span className="registerDesc">
                        connect with friends and the world around you on social.
                    </span>
                </div>
                <div className="registerRight">
                    <div className="registerBox">
                        <input Placeholder="Username" className="registerInput" />
                        
                        <input Placeholder="Email" className="registerInput" />
                        <input Placeholder="Passwrod" className="registerInput" />
                        <input Placeholder="Passwrod Again" className="registerInput" />
                        
                        <button className="registerButton">
                            Sign Up
                        </button>
                        <button className="registerRegister">
                            Login into Account
                        </button>
                    </div>  
                </div>
            </div>
        </div>
    )
}
