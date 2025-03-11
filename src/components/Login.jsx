import { useState } from "react";
import "/public/css/Login.css";
import { Footer } from "./Footer";

const hardcodedUser = { username: "admin", password: "password123" };

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (username === hardcodedUser.username && password === hardcodedUser.password) {
            onLogin();
        } else {
            setError("Invalid credentials");
        }
    };

    return (
        <div className="login-page">
            
            <div className="login-container">
                <h2>Welcome to the [LastName] Family Tree</h2>
                {error && <p className="error">{error}</p>}
                
                <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>
            </div>

            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};

export default Login;
