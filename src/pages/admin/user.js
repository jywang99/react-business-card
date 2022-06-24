import { useNavigate } from "react-router-dom";
import properties from "../../properties";
import { getAdminToken } from "../../util/credentialmanager";

const User = ({ user }) => {
    const navigate = useNavigate();

    const handleEdit = (e) => {
        navigate('/admin/edit', { state: user });
        e.preventDefault();
    }

    const handleDelete = (e) => {
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Authorization': getAdminToken()
            },
            body: JSON.stringify({
                Id: user.Id
            })
        }
        fetch(properties.adminUserApiUrl, requestOptions)
            .then(response => console.log(response))
            .then(navigate("/admin"));
        e.preventDefault();
    }

    return (
        <tr>
            <td>{user.Id}</td>
            <td>{user.fname}</td>
            <td>{user.lname}</td>
            <td>{user.age}</td>
            <td>{user.bday}</td>
            <td>{user.jobTitle}</td>
            <td>{user.employer}</td>
            <td>{user.city}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>
                <button className="btn btn-warning" onClick={e => handleEdit(e)}>Edit</button>
                <button className="btn btn-danger" onClick={e => handleDelete(e)}>Delete</button>
            </td>
        </tr>
    )
}

export default User;