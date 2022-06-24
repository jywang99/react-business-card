import { useEffect, useState } from "react";
import Header from "../../components/header";
import properties from "../../properties";
import { getAdminToken } from "../../util/credentialmanager";
import UserList from "./userlist";

const Admin = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(properties.adminApiUrl, {
            method: 'GET',
            headers: {
                'Authorization': getAdminToken(),
            }
        })
            .then(response => response.json())
            .then(data => setUsers(JSON.parse(data.body)));
    }, []);

    return (
        <div>
            <Header title="Admin" />
            <div className="content">
                {users ? <UserList list={users} /> : "Loading..."}
            </div>
        </div>
    );
}

export default Admin;