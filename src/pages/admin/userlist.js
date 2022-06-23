import User from "./user";

const UserList = ({ list }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">First name</th>
                    <th scope="col">Last name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Birthday</th>
                    <th scope="col">Job title</th>
                    <th scope="col">Employer</th>
                    <th scope="col">City</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                </tr>
                {list.map((user, i) => <User key={i} user={user} />)}
            </thead>
        </table>
    );
}

export default UserList;