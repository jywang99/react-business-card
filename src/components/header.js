import LoginStatBtn from "./loginStatBtn";
import './header.css';
import AdminLoginStatBtn from "./adminLoginStatBtn";
import { useEffect, useState } from "react";
import { isLoggedin, isAdminLoggedin } from "../util/credentialmanager";

const Header = ({ title }) => {
    const [loggedin, setLoggedin] = useState(false);
    const [adminLoggedin, setAdminLoggedin] = useState(false);

    useEffect(() => {
        setLoggedin(isLoggedin());
        setAdminLoggedin(isAdminLoggedin());
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="my-2 my-lg-0">
                <a className="navbar-brand" href="/">Business Card</a>
                <li className="nav-item"><strong>{title}</strong></li>
                <li className="nav-item">
                    <LoginStatBtn loggedin={loggedin} setLoggedin={setLoggedin} />
                </li>
                <li className="nav-item">
                    <AdminLoginStatBtn loggedin={adminLoggedin} setLoggedin={setAdminLoggedin} />
                </li>
            </ul>
        </nav>
    );
}

export default Header;
