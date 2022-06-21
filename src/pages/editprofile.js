import { useState } from 'react';

const EditProfile = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [age, setAge] = useState(20);
    const [bday, setBday] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [employer, setEmployer] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (event) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: localStorage.getItem("userid"),
                properties: {
                    fname: fname,
                    lname: lname,
                    age: age,
                    bday: bday,
                    jobTitle: jobTitle,
                    employer: employer,
                    email: email,
                    phone: phone
                }
            })
        };
        console.log("POST: ", requestOptions);
        fetch('https://28e6xerox8.execute-api.us-east-1.amazonaws.com/test/users', requestOptions)
            .then(response => console.log(response));
        event.preventDefault();
    }

    return (
        <div>
            <h3>Edit your profile</h3>
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
                <label htmlFor="email">Email: </label>
                <input type="text" id="email" name="email" value={email}
                    onChange={(e) => setEmail(e.target.value)} required />
                <br />
                <label htmlFor="phone">Phone number: </label>
                <input type="tel" id="phone" name="phone" value={phone}
                    onChange={(e) => setPhone(e.target.value)} required />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default EditProfile;