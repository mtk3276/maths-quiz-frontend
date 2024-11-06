import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
                <form onSubmit={handleLogin}>
                    <h2>Login to The Maths Club's Maths Quiz</h2>
                    <div className="username">
                        <label htmlFor="username" className="form-label">Username: </label>
                        <input 
                            type="text"
                            className="form-control" 
                            id="username"
                            onChange={e => {setUsername(e.target.value)}} />
                    </div>
                    <div className="password">
                        <label htmlFor="password" className="form-label">Password: </label>
                        <input 
                            type="password"
                            className="form-control" 
                            id="password"
                            onChange={e => {setUsername(e.target.value)}} />
                    </div>
                    <button type="submit" className="login-submit-btn">Log In</button>
                </form>
            </div>
        </>
    )
}