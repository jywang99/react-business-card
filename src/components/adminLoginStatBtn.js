const AdminLoginStatBtn = ({ loggedin, setLoggedin }) => {
    const handleLogin = () => {

    }

    const handleLogout = () => {

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