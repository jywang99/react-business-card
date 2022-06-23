import EditProfile from './editprofile';
import Header from '../../components/header';
import UploadPic from './uploadpic';
import { useState, useEffect } from 'react';
import properties from '../../properties';

const Edit = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(properties.userApiUrl)
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