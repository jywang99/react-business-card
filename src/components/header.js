import LoginStatBtn from "./loginStatBtn";
import './header.css';
import AdminLoginStatBtn from "./adminLoginStatBtn";

const Header = ({ title }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="my-2 my-lg-0">
                <a className="navbar-brand" href="/">Business Card</a>
                <li className="nav-item"><strong>{title}</strong></li>
                <li className="nav-item">
                    <LoginStatBtn />
                </li>
                <li className="nav-item">
                    <AdminLoginStatBtn />
                </li>
            </ul>
        </nav>
    );
}

export default Header;
