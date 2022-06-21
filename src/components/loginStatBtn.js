const LoginStatBtn = () => {
    let loggedin = false;
    let message = loggedin ? "Logout" : "Login";

    return (
        <button type="button">{message}</button>
    );
}

export default LoginStatBtn;