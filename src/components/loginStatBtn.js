import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../util/credentialmanager";

const LoginStatBtn = ({ loggedin, setLoggedin }) => {
    const navigate = useNavigate();

    const handleLogin = () => {
        window.location.assign('https://businesscard.auth.us-east-1.amazoncognito.com/login?client_id=6bh4tfl5a0mllrq98frjl7ilp9&response_type=token&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F%3Fmode%3Duser');
    }

    const handleLogout = () => {
        logout();
        setLoggedin(false);
        navigate('/');
        window.location.reload(false);
    }

    return (
        <div>
            {
                loggedin ?
                    <button type="button" onClick={() => handleLogout()}>Logout</button> :
                    <button type="button" onClick={() => handleLogin()}>Login</button>
            }

        </div>
    );
}

export default LoginStatBtn;