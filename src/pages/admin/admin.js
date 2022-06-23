import { useEffect, useState } from "react";
import Header from "../../components/header";
import properties from "../../properties";
import UserList from "./userlist";

const Admin = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(properties.adminApiUrl)
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div>
            <Header title="Admin" />
            {users ? <UserList list={users} /> : "Loading..."}
        </div>
    );
}

export default Admin;