import EditProfile from './editprofile';
import Header from '../../components/header';
import UploadPic from './uploadpic';
import { useState, useEffect } from 'react';
import properties from '../../properties';
import { getUserToken } from '../../util/credentialmanager';

const Edit = () => {
    const [user, setUser] = useState(null);

    const getUserInfo = () => {
        fetch(properties.userApiUrl, {
            method: 'GET',
            headers: {
                'Authorization': getUserToken()
            }
        })
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        getUserInfo();
    }, []);

    return (
        <div>
            <Header title="Edit" />
            <div className="content">
                <a href="/">←Back</a>
                <p></p>
                {user ? <UploadPic userid={user['Id']} /> : <p>Loading...</p>}
                <hr />
                {user ? <EditProfile user={user} mode="user" /> : <p>Loading...</p>}
            </div>
        </div>
    );
}

export default Edit;