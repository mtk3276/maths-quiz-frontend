import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { Tooltip } from "react-tooltip";
import "./LoginPage.css";

export default function LoginPage() {
    const navigate = useNavigate();
    
    const [input, setInput] = useState("");
    const { setUsername } = useUser();
    const tooltipMessage = "Please note this website doesn't contain real authentication so any username and password combination will work :)";

    function handleLogin(e) {
        e.preventDefault();
        setUsername(input);
        navigate("/quiz")
    }

    return (
        <>
            <div 
                className="form-container" 
                data-tooltip-id="login-tooltip"
                data-tooltip-content={tooltipMessage}
                data-tooltip-place="top">
            <Tooltip id="login-tooltip" className="login-tooltip"/>
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
                                onChange={e => {setInput(e.target.value)}} 
                                />
                        </div>
                        <div className="input-container password">
                            <label htmlFor="password" className="form-label">Password: </label>
                            <input 
                                required
                                type="password"
                                className="form-control" 
                                id="password"/>
                        </div>
                        <button type="submit" className="login-submit-btn">Log In</button>
                    </div>
                </form>
            </div>
        </>
    )
}