import Header from '../components/header';
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Profile from './profile';
import React, { useEffect, useState } from 'react';
import { saveUserCred, saveAdminCred } from '../util/credentialmanager';


const Home = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [params] = useSearchParams();
    const location = useLocation();
    const [tokenParams] = useSearchParams(location.hash.substring(1));

    useEffect(() => {
        let token = tokenParams.get("id_token");
        if (token != null && token.length > 0) {
            if (params.get("mode") === "user") {
                saveUserCred(token);
            } else if (params.get("mode") === "admin") {
                saveAdminCred(token);
            }
        }

        fetch('https://28e6xerox8.execute-api.us-east-1.amazonaws.com/test/users')
            .then(response => response.json())
            .then(data => setUser(data));
    }, []);

    return (
        <div>
            <Header title="Home" />
            <div className="content">
                {user ? <Profile user={user} /> : <p>Loading...</p>}
                <button type="button" onClick={() => navigate('/edit')}>Edit</button>
            </div>
        </div>
    );
}

export default Home;
