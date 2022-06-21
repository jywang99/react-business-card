const Profile = ({user}) => {
    return (
        <div>
            <p>First name: {user.fname}</p>
            <p>Last name: {user.lname}</p>
            <p>Age: {user.age}</p>
            <p>Birthday: {user.bday}</p>
            <p>Job title: {user.jobTitle}</p>
            <p>Employer: {user.employer}</p>
            <p>Email: {user.email}</p>
            <p>Phone number: {user.phone}</p>
        </div>
    )
}

export default Profile;