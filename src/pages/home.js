import Header from '../components/header';
import { useNavigate } from "react-router-dom";
import Profile from './profile';
import React, { useEffect, useState } from 'react';


const Home = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch('https://28e6xerox8.execute-api.us-east-1.amazonaws.com/test/users')
            .then(response => response.json())
            .then(data => setUser(data));
    }, []);

    return (
        <div>
            <Header title="Home" />
            <div className="content">
                {user ? <Profile user={user} /> : "Loading"}
                <button type="button" onClick={() => navigate('/edit')}>Edit</button>
            </div>
        </div>
    );
}

export default Home;
