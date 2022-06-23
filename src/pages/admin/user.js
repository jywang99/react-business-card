const User = ({ user }) => {
    return (
        <tr>
            <td>{user.fname}</td>
            <td>{user.lname}</td>
            <td>{user.age}</td>
            <td>{user.bday}</td>
            <td>{user.jobTitle}</td>
            <td>{user.employer}</td>
            <td>{user.city}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
        </tr>
    )
}

export default User;