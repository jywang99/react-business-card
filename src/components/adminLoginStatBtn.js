import { useNavigate } from "react-router-dom";
import properties from "../properties";
import { logoutAdmin } from "../util/credentialmanager";

const AdminLoginStatBtn = ({ loggedin, setLoggedin }) => {
    const navigate = useNavigate();

    const handleLogin = () => {
        window.location.assign(properties.adminLoginUrl);
    }

    const handleLogout = () => {
        logoutAdmin();
        setLoggedin(false);
        navigate('/');
        window.location.reload(false);
    }

    return (
        <div>
            {
                loggedin ?
                    <button type="button" className="btn btn-danger" onClick={() => handleLogout()}>Admin Logout</button> :
                    <button type="button" className="btn btn-warning" onClick={() => handleLogin()}>Admin Login</button>
            }
        </div>
    );
}

export default AdminLoginStatBtn;