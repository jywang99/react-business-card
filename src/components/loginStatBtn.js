import properties from "../properties";
import { logout } from "../util/credentialmanager";

const LoginStatBtn = ({ loggedin, setLoggedin }) => {
    const handleLogin = () => {
        window.location.assign(properties.userLoginUrl);
    }

    const handleLogout = () => {
        logout();
        setLoggedin(false);
        window.location.assign(properties.userLogoutUrl);
    }

    return (
        <div>
            {
                loggedin ?
                    <button type="button" className="btn btn-danger" onClick={() => handleLogout()}>Logout</button> :
                    <button type="button" className="btn btn-primary" onClick={() => handleLogin()}>Login</button>
            }

        </div>
    );
}

export default LoginStatBtn;