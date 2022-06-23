import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import properties from '../../properties';
import { getUserToken } from '../../util/credentialmanager';

const EditProfile = ({ user }) => {
    const navigate = useNavigate();
    const [fname, setFname] = useState(user.fname);
    const [lname, setLname] = useState(user.lname);
    const [age, setAge] = useState(user.age);
    const [bday, setBday] = useState(user.bday);
    const [jobTitle, setJobTitle] = useState(user.jobTitle);
    const [employer, setEmployer] = useState(user.employer);
    const [city, setCity] = useState(user.city);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);

    const handleSubmit = (event) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Authorization': getUserToken()
            },
            body: JSON.stringify({
                fname: fname,
                lname: lname,
                age: age,
                bday: bday,
                jobTitle: jobTitle,
                employer: employer,
                city: city,
                email: email,
                phone: phone
            })
        };
        fetch(properties.userApiUrl, requestOptions)
            .then(response => console.log(response))
            .then(navigate("/"));
        event.preventDefault();
    }

    return (
        <div>
            <h3>Edit your profile</h3>
            <p></p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">First name: </label>
                <input type="text" id="fname" name="fname" value={fname}
                    onChange={(e) => setFname(e.target.value)} required />
                <br />
                <label htmlFor="lname">Last name: </label>
                <input type="text" id="lname" name="lname" value={lname}
                    onChange={(e) => setLname(e.target.value)} required />
                <br />
                <label htmlFor="age">Age: </label>
                <input type="number" id="age" name="age" value={age}
                    onChange={(e) => setAge(e.target.value)} required />
                <br />
                <label htmlFor="birthday">Birthday: </label>
                <input type="date" id="birthday" name="birthday" value={bday}
                    onChange={(e) => setBday(e.target.value)} required />
                <br />
                <label htmlFor="jobtitle">Job title: </label>
                <input type="text" id="jobtitle" name="jobtitle" value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)} required />
                <br />
                <label htmlFor="employer">Employer: </label>
                <input type="text" id="employer" name="employer" value={employer}
                    onChange={(e) => setEmployer(e.target.value)} required />
                <br />
                <label htmlFor="city">City: </label>
                <input type="text" id="city" name="city" value={city}
                    onChange={(e) => setCity(e.target.value)} required />
                <br />
                <label htmlFor="email">Email: </label>
                <input type="text" id="email" name="email" value={email}
                    onChange={(e) => setEmail(e.target.value)} required />
                <br />
                <label htmlFor="phone">Phone number: </label>
                <input type="tel" id="phone" name="phone" value={phone}
                    onChange={(e) => setPhone(e.target.value)} required />
                <br />
                <p></p>
                <input type="submit" className="btn btn-primary" value="Submit" />
                <input type="button" className="btn btn-danger" value="Delete" />
                <input type="submit" className="btn btn-secondary" value="Cancel" />
            </form>
        </div>
    );
}

export default EditProfile;