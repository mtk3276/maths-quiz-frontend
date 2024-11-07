import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage() {
    const navigate = useNavigate();
    
    const [username, setUsername] = useState("");

    function handleLogin(e) {
        e.preventDefault();
        setUsername(e.target.value);
        navigate("/quiz")
    }

    return (
        <>
            <div className="form-container">
            <h2>The Maths Club Quiz </h2>
            <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="login-container">
                        <div className="input-container username">
                            <label htmlFor="username" className="form-label">Username: </label>
                            <input 
                                required
                                type="text"
                                className="form-control" 
                                id="username"
                                onChange={e => {setUsername(e.target.value)}} />
                        </div>
                        <div className="input-container password">
                            <label htmlFor="password" className="form-label">Password: </label>
                            <input 
                                required
                                type="password"
                                className="form-control" 
                                id="password"
                                onChange={e => {setUsername(e.target.value)}} />
                        </div>
                        <button type="submit" className="login-submit-btn">Log In</button>
                    </div>
                </form>
            </div>
        </>
    )
}