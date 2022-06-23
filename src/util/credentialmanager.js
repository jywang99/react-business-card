const isLoggedin = () => {
    return localStorage.getItem("token") != null &&
        localStorage.getItem("token-expires") > Date.now();
}

const isAdminLoggedin = () => {
    return localStorage.getItem("admin-token") != null &&
        localStorage.getItem("admin-token-expires") > Date.now();
}

const getExpirationTime = () => {
    let time = Date.now();
    return time + 60 * 60 * 1000;
}

const saveUserCred = (token) => {
    if (localStorage.getItem("token") === token) {
        return;
    }

    // save token
    localStorage.setItem("token", token);

    // set expiration time for token
    localStorage.setItem("token-expires", getExpirationTime());
}

const saveAdminCred = (token) => {
    if (localStorage.getItem("admin-token") === token) {
        return;
    }

    // save user id, token
    localStorage.setItem("admin-token", token);

    // set expiration time for token
    localStorage.setItem("admin-token-expires", getExpirationTime());
}

const getUserToken = () => {
    return localStorage.getItem("token");
}

const getAdminToken = () => {
    return localStorage.getItem("admin-token");
}

const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("token-expires");
    localStorage.removeItem("id");
}

const logoutAdmin = () => {
    localStorage.removeItem("admin-token");
    localStorage.removeItem("admin-token-expires");
    localStorage.removeItem("admin-id");
}

export {
    isLoggedin, isAdminLoggedin, saveUserCred, saveAdminCred, getUserToken, getAdminToken,
    logout, logoutAdmin
};