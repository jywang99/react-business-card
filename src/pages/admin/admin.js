import { useEffect, useState } from "react";
import Header from "../../components/header";
import UserList from "./userlist";

const Admin = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://28e6xerox8.execute-api.us-east-1.amazonaws.com/test/admin')
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