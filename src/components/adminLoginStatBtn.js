const AdminLoginStatBtn = () => {
    let loggedin = false;
    let message = loggedin ? "Logout" : "Login";

    return (
        <button type="button">{"Admin " + message}</button>
    );
}

export default AdminLoginStatBtn;