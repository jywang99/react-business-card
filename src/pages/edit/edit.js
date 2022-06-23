import EditProfile from './editprofile';
import Header from '../../components/header';
import UploadPic from './uploadpic';
import { useState, useEffect } from 'react';

const Edit = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch('https://28e6xerox8.execute-api.us-east-1.amazonaws.com/test/users')
            .then(response => response.json())
            .then(data => setUser(data));
    }, []);

    return (
        <div>
            <Header title="Edit" />
            <div className="content">
                <UploadPic />
                <hr />
                {user ? <EditProfile user={user} /> : <p>Loading...</p>}
            </div>
        </div>
    );
}

export default Edit;